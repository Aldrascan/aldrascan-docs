from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

# Load environment variables before anything else
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Import LLM chat after loading env
from emergentintegrations.llm.chat import LlmChat, UserMessage

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Get API key
EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============= DATA MODELS =============

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# AI Request Models
class ConsultantRequest(BaseModel):
    specialty: str
    volume: str
    priority: str

class TechQuestionRequest(BaseModel):
    question: str

class MarketingRequest(BaseModel):
    model: str
    focus: str

class PatientScriptRequest(BaseModel):
    treatment: str
    concern: str

class LabEmailRequest(BaseModel):
    lab_name: Optional[str] = ""
    goal: str

class FAQRequest(BaseModel):
    topic: str

class BlogOutlineRequest(BaseModel):
    topic: str

class CompetitionRequest(BaseModel):
    location: str
    specialty: str

class ClinicalCaseRequest(BaseModel):
    treatment: str
    benefit: str

class TimeSavingsRequest(BaseModel):
    procedure: str
    cases: str

class SalesPitchRequest(BaseModel):
    audience: str
    objection: Optional[str] = ""

class ROIRequest(BaseModel):
    volume: str
    cost: str


# ============= SYSTEM PROMPTS =============

SYSTEM_PROMPTS = {
    "consultant": """Eres un experto consultor de escáneres dentales intraorales para AldraScan, una empresa española que distribuye el Medit i900 y el Shining Elite.

Tu trabajo es analizar el perfil de la clínica dental y recomendar el escáner más adecuado.

INFORMACIÓN DE LOS PRODUCTOS:
- Medit i900: Escáner premium, velocidad extrema (70 FPS), peso ultraligero (165g), ecosistema completo de aplicaciones (Smile Design, Ortho, Maker), conexión USB-C, ideal para alto volumen y tecnología punta. Gama alta.
- Shining Elite: Mejor relación calidad-precio, curva de aprendizaje mínima, peso ligero (198g), ROI rápido, sin cuotas de mantenimiento, USB 3.0. Gama media/alta.

FORMATO DE RESPUESTA:
- Usa emojis para hacer la respuesta visual
- Estructura: Análisis breve → Recomendación clara → 3-4 razones principales
- Sé conciso pero informativo
- Responde siempre en español""",

    "tech_qa": """Eres un experto técnico de AldraScan especializado en escáneres dentales intraorales (Medit i900 y Shining Elite).

ESPECIFICACIONES TÉCNICAS:
- Medit i900: 70 FPS, 165g, USB-C, precisión 7 micras, escanea metal sin polvo en mayoría de casos
- Shining Elite: Velocidad estándar, 198g, USB 3.0, precisión 10 micras, motion sensing higiénico
- Ambos: 2 años garantía + equipo de sustitución 24h con AldraScan
- Ambos exportan STL/PLY abiertos

Responde de forma técnica pero comprensible. Usa emojis. En español.""",

    "marketing": """Eres un experto en marketing dental para redes sociales. Creas posts atractivos para Instagram y Facebook para clínicas dentales que anuncian su nuevo escáner digital.

Genera textos cortos, emocionales y con llamada a la acción. Usa emojis estratégicamente. El tono debe ser profesional pero cercano.

Responde siempre en español.""",

    "patient_script": """Eres un experto en comunicación paciente-dentista. Creas guiones para que los dentistas expliquen los beneficios del escaneo digital a sus pacientes.

El guion debe:
- Empatizar con la preocupación del paciente
- Explicar el proceso de forma simple
- Destacar beneficios tangibles
- Incluir tips para el profesional

Formato conversacional y cercano. En español.""",

    "lab_email": """Eres un experto en comunicación B2B dental. Redactas emails profesionales para que las clínicas se comuniquen con sus laboratorios dentales sobre el nuevo flujo digital.

Los emails deben ser:
- Profesionales pero cordiales
- Claros y directos
- Con estructura: asunto + cuerpo
- Orientados al objetivo específico

En español.""",

    "faq": """Eres un experto en escáneres dentales que genera FAQs informativas para clínicas.

Genera 3-4 preguntas frecuentes con sus respuestas sobre el tema solicitado. Las respuestas deben ser claras, precisas y útiles.

Formato:
❓ Pregunta
→ Respuesta

En español.""",

    "blog": """Eres un experto en marketing de contenidos dental. Creas esquemas de artículos de blog optimizados para SEO sobre escáneres dentales.

El esquema debe incluir:
1. Introducción (hook + contexto)
2. Desarrollo (3-4 secciones principales)
3. Análisis práctico
4. Conclusión con CTA
5. Palabras clave sugeridas

En español.""",

    "competition": """Eres un consultor estratégico para clínicas dentales. Ayudas a diferenciarse de la competencia local mediante tecnología digital.

Proporciona 3 estrategias concretas de diferenciación basadas en:
- Posicionamiento tecnológico
- Experiencia del paciente
- Marketing local

Personaliza según la zona y especialidad indicadas. En español.""",

    "clinical_case": """Eres un experto en marketing dental que ayuda a estructurar casos clínicos para presentaciones y redes sociales.

Crea una estructura de caso clínico con:
- Título atractivo
- Situación inicial
- Solución digital implementada
- Resultado final

Destaca el beneficio específico mencionado. En español.""",

    "time_savings": """Eres un analista de eficiencia en clínicas dentales. Calculas el ahorro de tiempo al digitalizar el flujo de trabajo.

DATOS DE REFERENCIA:
- Corona unitaria: ahorro ~15-20 min/caso
- Puente 3 unidades: ahorro ~20-25 min/caso
- Arcada completa: ahorro ~25-30 min/caso
- Implante unitario: ahorro ~15-20 min/caso

Calcula y presenta el impacto en términos de tiempo semanal, mensual y su traducción práctica. En español.""",

    "sales_pitch": """Eres un experto en ventas consultivas para equipamiento dental. Creas argumentarios personalizados según el perfil del decisor.

El argumentario debe incluir:
1. Argumento financiero
2. Argumento clínico
3. Argumento de futuro/competitividad

Adapta el tono y énfasis según la audiencia. En español.""",

    "roi": """Eres un analista financiero especializado en equipamiento dental. Calculas el ROI de escáneres intraorales.

DATOS DE REFERENCIA:
- Coste digital por caso: ~2€ (solo fundas y tiempo)
- Precio medio escáner: 6.000-12.000€
- Ahorro adicional: envíos físicos, repeticiones, tiempo

Presenta el análisis con:
- Datos introducidos
- Cálculos claros
- ROI estimado en meses
- Conclusión

En español."""
}


# ============= HELPER FUNCTION =============

async def generate_ai_response(system_prompt: str, user_prompt: str) -> str:
    """Generate AI response using Gemini via emergentintegrations"""
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="EMERGENT_LLM_KEY not configured")
    
    try:
        session_id = str(uuid.uuid4())
        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=system_prompt
        ).with_model("gemini", "gemini-2.5-flash")
        
        user_message = UserMessage(text=user_prompt)
        response = await chat.send_message(user_message)
        return response
    except Exception as e:
        logging.error(f"AI generation error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error generating AI response: {str(e)}")


# ============= EXISTING ROUTES =============

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


# ============= AI ROUTES =============

@api_router.post("/ai/consultant")
async def ai_consultant(request: ConsultantRequest):
    """AI-powered scanner recommendation"""
    user_prompt = f"""Analiza el siguiente perfil de clínica y recomienda el escáner más adecuado:

- Especialidad: {request.specialty}
- Volumen mensual de casos: {request.volume}
- Prioridad principal: {request.priority}

Proporciona una recomendación clara y justificada."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["consultant"], user_prompt)
    return {"response": response}


@api_router.post("/ai/tech-qa")
async def ai_tech_qa(request: TechQuestionRequest):
    """Technical Q&A about dental scanners"""
    user_prompt = f"Pregunta técnica del cliente: {request.question}"
    response = await generate_ai_response(SYSTEM_PROMPTS["tech_qa"], user_prompt)
    return {"response": response}


@api_router.post("/ai/marketing")
async def ai_marketing(request: MarketingRequest):
    """Generate marketing copy for social media"""
    user_prompt = f"""Crea un post de redes sociales para anunciar:
- Modelo de escáner: {request.model}
- Enfoque del mensaje: {request.focus}

Genera un texto atractivo listo para publicar."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["marketing"], user_prompt)
    return {"response": response}


@api_router.post("/ai/patient-script")
async def ai_patient_script(request: PatientScriptRequest):
    """Generate patient communication scripts"""
    user_prompt = f"""Crea un guion para explicar el escaneo digital a un paciente:
- Tratamiento propuesto: {request.treatment}
- Preocupación del paciente: {request.concern}

El guion debe empatizar y convencer."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["patient_script"], user_prompt)
    return {"response": response}


@api_router.post("/ai/lab-email")
async def ai_lab_email(request: LabEmailRequest):
    """Generate professional emails for dental labs"""
    lab_name = request.lab_name or "[Nombre del Laboratorio]"
    user_prompt = f"""Redacta un email profesional para el laboratorio:
- Nombre del laboratorio: {lab_name}
- Objetivo del email: {request.goal}

Incluye asunto y cuerpo del email."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["lab_email"], user_prompt)
    return {"response": response}


@api_router.post("/ai/faq")
async def ai_faq(request: FAQRequest):
    """Generate FAQs about dental scanners"""
    user_prompt = f"Genera preguntas frecuentes y respuestas sobre: {request.topic} en relación a escáneres dentales intraorales (Medit i900 y Shining Elite)."
    response = await generate_ai_response(SYSTEM_PROMPTS["faq"], user_prompt)
    return {"response": response}


@api_router.post("/ai/blog-outline")
async def ai_blog_outline(request: BlogOutlineRequest):
    """Generate blog post outlines"""
    user_prompt = f"Crea un esquema completo de artículo de blog sobre: {request.topic}"
    response = await generate_ai_response(SYSTEM_PROMPTS["blog"], user_prompt)
    return {"response": response}


@api_router.post("/ai/competition")
async def ai_competition(request: CompetitionRequest):
    """Analyze local competition and suggest differentiation strategies"""
    user_prompt = f"""Desarrolla estrategias de diferenciación para una clínica dental:
- Ubicación/Zona: {request.location}
- Especialidad principal: {request.specialty}

Proporciona estrategias concretas y accionables."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["competition"], user_prompt)
    return {"response": response}


@api_router.post("/ai/clinical-case")
async def ai_clinical_case(request: ClinicalCaseRequest):
    """Generate clinical case study structures"""
    user_prompt = f"""Estructura un caso clínico para presentación:
- Tipo de tratamiento: {request.treatment}
- Beneficio principal a destacar: {request.benefit}

Crea una estructura completa y atractiva."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["clinical_case"], user_prompt)
    return {"response": response}


@api_router.post("/ai/time-savings")
async def ai_time_savings(request: TimeSavingsRequest):
    """Calculate time savings with digital workflow"""
    user_prompt = f"""Calcula el ahorro de tiempo al digitalizar:
- Tipo de procedimiento: {request.procedure}
- Casos semanales: {request.cases}

Proporciona un análisis detallado del impacto."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["time_savings"], user_prompt)
    return {"response": response}


@api_router.post("/ai/sales-pitch")
async def ai_sales_pitch(request: SalesPitchRequest):
    """Generate customized sales pitches"""
    objection = request.objection or "precio/inversión inicial"
    user_prompt = f"""Crea un argumentario de ventas para:
- Perfil del decisor: {request.audience}
- Objeción principal a vencer: {objection}

Desarrolla argumentos convincentes y personalizados."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["sales_pitch"], user_prompt)
    return {"response": response}


@api_router.post("/ai/roi")
async def ai_roi(request: ROIRequest):
    """Calculate ROI for dental scanner investment"""
    user_prompt = f"""Calcula el ROI de invertir en un escáner intraoral:
- Impresiones tradicionales al mes: {request.volume}
- Coste actual por impresión (€): {request.cost}

Proporciona un análisis financiero completo."""
    
    response = await generate_ai_response(SYSTEM_PROMPTS["roi"], user_prompt)
    return {"response": response}


# ============= APP SETUP =============

# Include the router in the main app
app.include_router(api_router)

# Health check endpoint for Kubernetes deployment
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
