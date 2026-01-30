---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ImageStyleId

```ts
type ImageStyleId = 
  | ImageThemeStyle
  | ImageTechniqueStyle
  | ImageEffectStyle
  | ImageMovementStyle
  | ImageMaterialStyle
  | ImageConceptStyle;
```

Combines all available style options for your image generation.
Use this type to access any style from themes, techniques, lighting, composition, effects, colors, movements, materials, or concepts.

Example usage:

## Example

```ts
const styles: ImageStyleId[] = [
  ImageThemeStyle.SYNTHWAVE,
  ImageTechniqueStyle.WATERCOLOR
];
```
