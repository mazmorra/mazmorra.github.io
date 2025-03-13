# Daño

| Decena | Ubicación del impacto |
|--------|-----------------------|
| 0      | Cabeza                |
| 1      | Brazo derecho         |
| 2      | Brazo izquierdo       |
| 3-5    | Cuerpo                |
| 6-9    | Piernas               |

<details>
  <summary>▼&nbsp;&nbsp;Nota de diseño</summary>

  Siguiendo la distribución de los números:
  - Impactar en la cabeza o en cualquier brazo tiene la misma probabilidad (10%). 
  - Impactar en el torso es 3 veces más probable que en cualquiera de estos tres lugares (30%). 
  - Impactar las piernas tiene aun mayor probabilidad que impactar en el torso (40%). 
  
  Pero esto no es del todo cierto, normalmente la precisión de una habilidad será menos del 75%. Por tanto, la mayoría de las veces, solo el 6 y el 7 servirán para impactar en las piernas (20%). Si alguna habilidad tiene una precisión muy baja, una criatura podría no tener posibilidad alguna de impactar en las piernas del enemigo. Esto no es muy realista, pero se asume como una pequeña pérdida a favor de simplificar esta mecánica. Además siempre existen habilidades que permiten atacar en partes concretas del cuerpo del enemigo.
</details>