# CSS Variables

### CSS variables must be defined inside some selector. 
### If we want to use the same variable throughout the page, we can define the variable/property inside root selector.
```
:root {
    --dark-color: black;
}

.content {
    color: var(--dark-color);
}
```

### CSS variables can be used with media queries effectively.
### The font size of content will be 1rem, and for screen greater than 1000px the font size will be 1.5rem
```
:root {
    --font-1: 1rem;
}

@media(min-width: 1000px) {
    :root {
        --font-1: 1.5rem;
    }
}

.content {
    font-size: var(--font-1);
}
```