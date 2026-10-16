# Guía de contribución

## Flujo de ramas

- `main`: solo contiene código estable. Nadie trabaja directamente aquí.
- `develop`: se crea desde `main`. Aquí se integra todo el trabajo.
- `feature/<nombre>`: se crea desde `develop`. Una por funcionalidad.
- `hotfix/<nombre>`: se crea desde `main` para errores urgentes. Se fusiona a `main` y también a `develop`.

## Formato de commits

Usa un prefijo seguido de dos puntos:

- `feat:` nueva funcionalidad
- `fix:` corrección de un error
- `style:` cambios de estilo (CSS, formato)
- `docs:` documentación

Ejemplo: `feat: add menu page structure`

## Pull requests

1. Sube tu rama con `git push -u origin <rama>`.
2. Abre un PR en GitHub con un título claro y una descripción.
3. Indica la base y la rama a comparar (por ejemplo, base `develop`, compare `feature/menu-page`).
4. Revisa el PR y haz el merge.
5. Usa **Create a merge commit** (no squash) y **no borres la rama**.

## Release

Cuando `develop` está listo, se abre un PR de `develop` a `main` y se crea la etiqueta `v1.0.0`.
