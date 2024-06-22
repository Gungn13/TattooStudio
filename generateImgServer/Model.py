from pydantic import BaseModel

class Model(BaseModel):
    description : str
    style: int