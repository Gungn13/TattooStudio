from fastapi import APIRouter
from apiKeys import api_key, secret_key
from api import Text2ImageAPI
from Model import Model


router = APIRouter()

@router.post("/api/generate")
def generate_model(generate_request: Model):
    api = Text2ImageAPI('https://api-key.fusionbrain.ai/',
                        api_key,
                        secret_key)
    model_id = api.get_model()
    uuid = api.generate(generate_request.description,
                        model_id,
                        generate_request.style)
    images = api.check_generation(uuid)

    return [
        {"prompt": f"{generate_request.description}",
         "style": f"{generate_request.style}",
         "image": f"{images}"}
    ]