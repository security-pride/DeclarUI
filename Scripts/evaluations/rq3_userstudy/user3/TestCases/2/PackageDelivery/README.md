# ISSUE

a lot of issues like this

```jsx
<Image source={{uri: '../assets/snack-icon.png' }} style={styles.footerIcon} />
```

fix to

```jsx
<Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />
```