import random

personas = []
emparejamientos = {}

def agregar_personas():
    while 1==1:
        print("Introduce 'f' para terminar")
        persona = input("Añade una persona: ")
        if persona.lower() != "f":
            if persona in personas:
                print("Esa persona ya está añadida, diferencia el nombre")
            else:
                personas.append(persona)
        else:
            break

def sorteo(persona, personasAux):
    if persona in personasAux:
        personasAux.remove(persona)
    
    amigo = random.choice(personasAux)
    emparejamientos[persona] = amigo
    
    personasAux.append(persona)
    personasAux.remove(amigo)
    
    return personasAux
    
def main():
    agregar_personas()
    personasAux = personas.copy()
    
    for persona in personas:
        print(f"Sorteando para {persona}...")
        personasAux = sorteo(persona, personasAux)
    
    print("Los emparejamientos son: ")
    for persona, amigo in emparejamientos.items():
        print(f"{persona} -> {amigo}")
        
if __name__ == "__main__":
    main()