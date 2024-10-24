# Day-4-project
How This Works:
HTML:

The light/dark mode toggle button (<button id="theme-toggle">) switches between light and dark themes using FontAwesome icons for visual feedback.
The calculator layout remains the same, but Tailwind's dark: utility classes add the necessary dark mode styles.
JavaScript:

toggleTheme() toggles between light and dark classes on the body.
The theme is saved in localStorage so that when the user revisits the page, their preference is restored.
Icons change dynamically when the theme switches.
Try It Out!
This creates a simple, functional calculator with a dark mode toggle and ensures the theme is persisted even after refreshing the page. The dark mode affects both the calculator body and the input buttons to provide a seamless experience.
