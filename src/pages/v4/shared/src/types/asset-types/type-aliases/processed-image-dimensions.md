[**cc-everywhere**](..\..\..\..\..\index.md)

<HorizontalLine />

# Type Alias: ProcessedImageDimensions

```ts
type ProcessedImageDimensions = ImageDimensions & object;
```

Represents the processed image dimensions.
It includes the size of the image in pixels along with the aspect ratio.
It would have computed the aspect ratio value if it was provided as a number in ImageDimensions by bucketing it into one of the predefined aspect ratios.

## Type declaration

### aspectRatio

```ts
aspectRatio: AspectRatio;
```
