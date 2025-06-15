declare module '*.png' {
    const value: string;
    export default value;
  }
  declare module '*.JPG' {
  const value: string;
  export default value;
}
  /* This tells TypeScript that any file ending in .png should be treated as 
  a module that exports a string (the path to the image). */