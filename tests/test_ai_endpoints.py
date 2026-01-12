"""
Backend API Tests for AldraScan Dental Scanner Comparator
Tests all 12 AI endpoints + health check using Gemini via emergentintegrations
"""
import pytest
import requests
import os
import time

# Get BASE_URL from environment
BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthAndBasicEndpoints:
    """Test health check and basic API endpoints"""
    
    def test_api_root(self):
        """Test API root endpoint"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"
        print(f"✅ API root endpoint working: {data}")


class TestAIConsultantEndpoint:
    """Test AI Consultant endpoint - scanner recommendations"""
    
    def test_consultant_basic(self):
        """Test consultant with basic parameters"""
        response = requests.post(
            f"{BASE_URL}/api/ai/consultant",
            json={
                "specialty": "General",
                "volume": "Bajo (Iniciando)",
                "priority": "Rentabilidad y ROI rápido"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50  # Should have substantial content
        assert isinstance(data["response"], str)
        print(f"✅ AI Consultant working - Response length: {len(data['response'])} chars")
    
    def test_consultant_ortodoncia(self):
        """Test consultant with orthodontics specialty"""
        response = requests.post(
            f"{BASE_URL}/api/ai/consultant",
            json={
                "specialty": "Ortodoncia",
                "volume": "Alto (>50 casos/mes)",
                "priority": "Velocidad y eficiencia"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        print(f"✅ AI Consultant (Ortodoncia) working")


class TestTechQAEndpoint:
    """Test Tech Q&A endpoint - technical questions"""
    
    def test_tech_qa_precision(self):
        """Test tech Q&A about scanner precision"""
        response = requests.post(
            f"{BASE_URL}/api/ai/tech-qa",
            json={"question": "¿Cuál es la precisión del Medit i900?"},
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 30
        print(f"✅ Tech Q&A working - Response length: {len(data['response'])} chars")
    
    def test_tech_qa_metal_scanning(self):
        """Test tech Q&A about metal scanning"""
        response = requests.post(
            f"{BASE_URL}/api/ai/tech-qa",
            json={"question": "¿Puede escanear metal sin polvo?"},
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        print(f"✅ Tech Q&A (metal scanning) working")


class TestMarketingEndpoint:
    """Test Marketing Kit endpoint - social media content"""
    
    def test_marketing_medit(self):
        """Test marketing content for Medit i900"""
        response = requests.post(
            f"{BASE_URL}/api/ai/marketing",
            json={
                "model": "Medit i900",
                "focus": "Adiós a las pastas"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 30
        print(f"✅ Marketing Kit working - Response length: {len(data['response'])} chars")
    
    def test_marketing_shining(self):
        """Test marketing content for Shining Elite"""
        response = requests.post(
            f"{BASE_URL}/api/ai/marketing",
            json={
                "model": "Shining Elite",
                "focus": "Tecnología de vanguardia"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        print(f"✅ Marketing Kit (Shining) working")


class TestPatientScriptEndpoint:
    """Test Patient Script endpoint - patient communication"""
    
    def test_patient_script_corona(self):
        """Test patient script for crown treatment"""
        response = requests.post(
            f"{BASE_URL}/api/ai/patient-script",
            json={
                "treatment": "Corona o Puente",
                "concern": "Reflejo de náusea"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ Patient Script working - Response length: {len(data['response'])} chars")


class TestLabEmailEndpoint:
    """Test Lab Email endpoint - B2B communication"""
    
    def test_lab_email_with_name(self):
        """Test lab email with lab name"""
        response = requests.post(
            f"{BASE_URL}/api/ai/lab-email",
            json={
                "lab_name": "Laboratorio Dental Pro",
                "goal": "Informar adquisición escáner"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ Lab Email working - Response length: {len(data['response'])} chars")
    
    def test_lab_email_without_name(self):
        """Test lab email without lab name (optional field)"""
        response = requests.post(
            f"{BASE_URL}/api/ai/lab-email",
            json={
                "lab_name": "",
                "goal": "Solicitar compatibilidad archivos"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        print(f"✅ Lab Email (no name) working")


class TestFAQEndpoint:
    """Test FAQ Generator endpoint"""
    
    def test_faq_precision(self):
        """Test FAQ generation about precision"""
        response = requests.post(
            f"{BASE_URL}/api/ai/faq",
            json={"topic": "Precisión"},
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ FAQ Generator working - Response length: {len(data['response'])} chars")


class TestBlogOutlineEndpoint:
    """Test Blog Outline endpoint"""
    
    def test_blog_outline(self):
        """Test blog outline generation"""
        response = requests.post(
            f"{BASE_URL}/api/ai/blog-outline",
            json={"topic": "Beneficios de la Impresión Digital"},
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ Blog Outline working - Response length: {len(data['response'])} chars")


class TestCompetitionEndpoint:
    """Test Competition Analyzer endpoint"""
    
    def test_competition_analysis(self):
        """Test competition analysis"""
        response = requests.post(
            f"{BASE_URL}/api/ai/competition",
            json={
                "location": "28001 Madrid",
                "specialty": "Ortodoncia Invisible"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ Competition Analyzer working - Response length: {len(data['response'])} chars")


class TestClinicalCaseEndpoint:
    """Test Clinical Case Generator endpoint"""
    
    def test_clinical_case(self):
        """Test clinical case generation"""
        response = requests.post(
            f"{BASE_URL}/api/ai/clinical-case",
            json={
                "treatment": "Carillas de cerámica",
                "benefit": "Diseño de Sonrisa Digital (DSD)"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ Clinical Case working - Response length: {len(data['response'])} chars")


class TestTimeSavingsEndpoint:
    """Test Time Savings Calculator endpoint"""
    
    def test_time_savings(self):
        """Test time savings calculation"""
        response = requests.post(
            f"{BASE_URL}/api/ai/time-savings",
            json={
                "procedure": "Corona Unitaria",
                "cases": "10"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ Time Savings working - Response length: {len(data['response'])} chars")


class TestSalesPitchEndpoint:
    """Test Sales Pitch Generator endpoint"""
    
    def test_sales_pitch_with_objection(self):
        """Test sales pitch with objection"""
        response = requests.post(
            f"{BASE_URL}/api/ai/sales-pitch",
            json={
                "audience": "Socio Financiero",
                "objection": "El coste es muy alto"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ Sales Pitch working - Response length: {len(data['response'])} chars")
    
    def test_sales_pitch_without_objection(self):
        """Test sales pitch without objection (optional field)"""
        response = requests.post(
            f"{BASE_URL}/api/ai/sales-pitch",
            json={
                "audience": "Director Clínico",
                "objection": ""
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        print(f"✅ Sales Pitch (no objection) working")


class TestROIEndpoint:
    """Test ROI Calculator endpoint"""
    
    def test_roi_calculation(self):
        """Test ROI calculation"""
        response = requests.post(
            f"{BASE_URL}/api/ai/roi",
            json={
                "volume": "30",
                "cost": "15"
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        assert len(data["response"]) > 50
        print(f"✅ ROI Calculator working - Response length: {len(data['response'])} chars")
    
    def test_roi_without_cost(self):
        """Test ROI calculation without cost (uses default)"""
        response = requests.post(
            f"{BASE_URL}/api/ai/roi",
            json={
                "volume": "50",
                "cost": ""
            },
            timeout=60
        )
        assert response.status_code == 200
        data = response.json()
        assert "response" in data
        print(f"✅ ROI Calculator (default cost) working")


class TestValidationErrors:
    """Test validation and error handling"""
    
    def test_consultant_missing_fields(self):
        """Test consultant with missing required fields"""
        response = requests.post(
            f"{BASE_URL}/api/ai/consultant",
            json={"specialty": "General"},  # Missing volume and priority
            timeout=30
        )
        # Should return 422 for validation error
        assert response.status_code == 422
        print(f"✅ Validation error handling working (422 for missing fields)")
    
    def test_tech_qa_empty_question(self):
        """Test tech Q&A with empty question"""
        response = requests.post(
            f"{BASE_URL}/api/ai/tech-qa",
            json={"question": ""},
            timeout=60
        )
        # Empty question should still work (API accepts it)
        assert response.status_code == 200
        print(f"✅ Empty question handled")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "--tb=short"])
