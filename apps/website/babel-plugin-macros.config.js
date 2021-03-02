module.exports = {
  /**
   * Enabled twin.macro's styled-components support
   * References:
   * https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components#twin-options
   * https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components
   */
  twin: {
    preset: 'styled-components',
    /**
     * Display information in the terminal about the Tailwind class conversions
     */
    debug: false,
    /**
     * Display generated class information in the terminal from plugins
     */
    debugPlugins: false,
    /**
     * Automate the import of 'styled-components/macro' so that we can use their css prop
     */
    autoCssProp: true,
    /**
     * Display class sugeestions when a class isn't found
     */
    hasSuggestions: true,
    /**
     * Add a prop to the elements in development so we can see the original tailwind classes
     */
    dataTwProp: true,
    /**
     * Disable css variables in colors (not gradients) to help support IE11/react native
     */
    disableColorVariables: false,
    /**
     * Look in className props for Tailwind classes to convert
     */
    includeClassNames: true,
    /**
     * Add a prop to the elements in development se we can see the original cs prop classes
     */
    dataCsProp: true,
    /**
     * Disable twin from reading values specified in the cs prop
     */
    disableCsProp: false,
  },
};
