export default `{
  "block": "page",
  "mix": [
      {
          "block": "theme",
          "mods": {
              "color": "project-default",
              "size": "default",
              "space": "default",
              "gap": "small"
          }
      }
  ],
  "content": [
      {
          "block": "header",
          "content": {
              "block": "header",
              "elem": "content",
              "content": [
                  {
                      "block": "header",
                      "elem": "logo"
                  },
                  [
                      {
                          "block": "onoffswitch",
                          "mods": {
                              "checked": true
                          },
                          "content": [
                              {
                                  "block": "onoffswitch",
                                  "elem": "button"
                              }
                          ]
                      }
                  ]
              ]
          }
      },
      {
        "block": "text",
        "mods": {
          "type": "h1"
        }
      },
      {
          "block": "layout",
          "content": [
              {
                  "block": "layout",
                  "elem": "container",
                  "elemMods": {
                      "size": "m",
                      "align": "center"
                  },
                  "mix": [
                      {
                          "block": "section",
                          "mods": {
                              "indent-b": "xxxxl"
                          }
                      },
                      {
                        "block": "text",
                        "mods": {
                          "type": "h1"
                        }
                      }
                  ],
                  "content": [
                      {
                          "block": "grid",
                          "mods": {
                              "m-columns": "12",
                              "col-gap": "full",
                              "row-gap": "full"
                          },
                          "content": [
                              {
                                  "block": "grid",
                                  "elem": "fraction",
                                  "elemMods": {
                                      "m-col": 4
                                  },
                                  "content": [
                                      {
                                          "block": "cover",
                                          "mix": [
                                              {
                                                  "block": "theme",
                                                  "mods": {
                                                      "color": "project-brand"
                                                  }
                                              },
                                              {
                                                  "block": "card",
                                                  "mods": {
                                                      "view": "default"
                                                  }
                                              }
                                          ],
                                          "content": [
                                              {
                                                  "block": "cover",
                                                  "elem": "info",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "elem": "content",
                                                          "elemMods": {
                                                              "space-a": "xxl"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "cover",
                                                          "elem": "preview",
                                                          "content": [
                                                              {
                                                                  "block": "image"
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "text",
                                                          "mods": {
                                                              "view": "primary",
                                                              "size": "xxl"
                                                          },
                                                          "mix": [
                                                              {
                                                                  "block": "cover",
                                                                  "elem": "text"
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "elem": "word",
                                                                  "elemMods": {
                                                                      "width": "l"
                                                                  }
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "text",
                                                          "mods": {
                                                              "view": "primary",
                                                              "size": "xxl"
                                                          },
                                                          "mix": [
                                                              {
                                                                  "block": "cover",
                                                                  "elem": "text"
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "elem": "word",
                                                                  "elemMods": {
                                                                      "width": "m"
                                                                  }
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              },
                                              {
                                                  "block": "cover",
                                                  "elem": "footer",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "elem": "footer",
                                                          "elemMods": {
                                                              "space-a": "xxl"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "button",
                                                          "mods": {
                                                              "size": "l",
                                                              "width": "full"
                                                          }
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "block": "grid",
                                  "elem": "fraction",
                                  "elemMods": {
                                      "m-col": 8
                                  },
                                  "content": [
                                      {
                                          "block": "text",
                                          "mods": {
                                              "size": "xxl",
                                              "view": "primary",
                                              "type": "h1"
                                          },
                                          "content": [
                                              {
                                                  "block": "text",
                                                  "elem": "word",
                                                  "elemMods": {
                                                      "width": "l"
                                                  }
                                              }
                                          ]
                                      },
                                      {
                                          "block": "text",
                                          "mods": {
                                              "view": "primary",
                                              "size": "m"
                                          },
                                          "content": [
                                              [
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  }
                                              ]
                                          ]
                                      },
                                      {
                                          "block": "text",
                                          "mods": {
                                              "size": "xl",
                                              "view": "primary",
                                              "type": "h2"
                                          },
                                          "content": [
                                              {
                                                  "block": "text",
                                                  "elem": "word",
                                                  "elemMods": {
                                                      "width": "l"
                                                  }
                                              }
                                          ]
                                      },
                                      {
                                          "block": "text",
                                          "mods": {
                                              "view": "primary",
                                              "size": "m"
                                          },
                                          "content": [
                                              [
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "l"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "m"
                                                      }
                                                  },
                                                  {
                                                      "block": "text",
                                                      "elem": "word",
                                                      "elemMods": {
                                                          "width": "s"
                                                      }
                                                  }
                                              ]
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              },
              {
                  "block": "layout",
                  "elem": "container",
                  "mix": [
                      {
                          "block": "theme",
                          "mods": {
                              "color": "project-inverse"
                          }
                      },
                      {
                          "block": "section",
                          "mods": {
                              "space-v": "xxxxl"
                          }
                      }
                  ],
                  "content": [
                      {
                          "block": "layout",
                          "elem": "container",
                          "elemMods": {
                              "size": "m",
                              "align": "center"
                          },
                          "content": [
                              {
                                  "block": "text",
                                  "mods": {
                                      "view": "primary",
                                      "size": "xl"
                                  },
                                  "mix": [
                                      {
                                          "block": "product",
                                          "elem": "title"
                                      }
                                  ],
                                  "content": [
                                      {
                                          "block": "text",
                                          "elem": "word",
                                          "elemMods": {
                                              "width": "l"
                                          }
                                      },
                                      {
                                          "block": "text",
                                          "elem": "word",
                                          "elemMods": {
                                              "width": "l"
                                          }
                                      }
                                  ]
                              },
                              {
                                  "block": "grid",
                                  "mods": {
                                      "m-columns": 12,
                                      "row-gap": "half",
                                      "col-gap": "half"
                                  },
                                  "content": [
                                      {
                                          "block": "grid",
                                          "elem": "fraction",
                                          "elemMods": {
                                              "m-col": 3
                                          },
                                          "content": [
                                              {
                                                  "block": "product",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "mods": {
                                                              "view": "default",
                                                              "border": "all"
                                                          }
                                                      },
                                                      {
                                                          "block": "theme",
                                                          "mods": {
                                                              "color": "project-inverse"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "product",
                                                          "elem": "content",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "content",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "product",
                                                                  "elem": "image",
                                                                  "mix": [
                                                                      {
                                                                          "block": "theme",
                                                                          "mods": {
                                                                              "color": "project-default"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "content": [
                                                                      {
                                                                          "block": "image"
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "product",
                                                          "elem": "footer",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "footer",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "m",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "l"
                                                                          }
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "s",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "m"
                                                                          }
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              }
                                          ]
                                      },
                                      {
                                          "block": "grid",
                                          "elem": "fraction",
                                          "elemMods": {
                                              "m-col": 3
                                          },
                                          "content": [
                                              {
                                                  "block": "product",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "mods": {
                                                              "view": "default",
                                                              "border": "all"
                                                          }
                                                      },
                                                      {
                                                          "block": "theme",
                                                          "mods": {
                                                              "color": "project-inverse"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "product",
                                                          "elem": "content",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "content",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "product",
                                                                  "elem": "image",
                                                                  "mix": [
                                                                      {
                                                                          "block": "theme",
                                                                          "mods": {
                                                                              "color": "project-default"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "content": [
                                                                      {
                                                                          "block": "image"
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "product",
                                                          "elem": "footer",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "footer",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "m",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "l"
                                                                          }
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "s",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "m"
                                                                          }
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              }
                                          ]
                                      },
                                      {
                                          "block": "grid",
                                          "elem": "fraction",
                                          "elemMods": {
                                              "m-col": 3
                                          },
                                          "content": [
                                              {
                                                  "block": "product",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "mods": {
                                                              "view": "default",
                                                              "border": "all"
                                                          }
                                                      },
                                                      {
                                                          "block": "theme",
                                                          "mods": {
                                                              "color": "project-inverse"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "product",
                                                          "elem": "content",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "content",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "product",
                                                                  "elem": "image",
                                                                  "mix": [
                                                                      {
                                                                          "block": "theme",
                                                                          "mods": {
                                                                              "color": "project-default"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "content": [
                                                                      {
                                                                          "block": "image"
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "product",
                                                          "elem": "footer",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "footer",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "m",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "l"
                                                                          }
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "s",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "m"
                                                                          }
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              }
                                          ]
                                      },
                                      {
                                          "block": "grid",
                                          "elem": "fraction",
                                          "elemMods": {
                                              "m-col": 3
                                          },
                                          "content": [
                                              {
                                                  "block": "product",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "mods": {
                                                              "view": "default",
                                                              "border": "all"
                                                          }
                                                      },
                                                      {
                                                          "block": "theme",
                                                          "mods": {
                                                              "color": "project-inverse"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "product",
                                                          "elem": "content",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "content",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "product",
                                                                  "elem": "image",
                                                                  "mix": [
                                                                      {
                                                                          "block": "theme",
                                                                          "mods": {
                                                                              "color": "project-default"
                                                                          }
                                                                      }
                                                                  ],
                                                                  "content": [
                                                                      {
                                                                          "block": "image"
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "product",
                                                          "elem": "footer",
                                                          "mix": [
                                                              {
                                                                  "block": "card",
                                                                  "elem": "footer",
                                                                  "elemMods": {
                                                                      "space-a": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "m",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "l"
                                                                          }
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "size": "s",
                                                                      "view": "primary"
                                                                  },
                                                                  "content": [
                                                                      {
                                                                          "block": "text",
                                                                          "elem": "word",
                                                                          "elemMods": {
                                                                              "width": "m"
                                                                          }
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "block": "footer",
          "content": [
              {
                  "block": "footer",
                  "elem": "content",
                  "content": [
                      {
                          "block": "text",
                          "mods": {
                              "view": "primary",
                              "size": "l"
                          },
                          "content": [
                              {
                                  "block": "text",
                                  "elem": "word",
                                  "elemMods": {
                                      "width": "l"
                                  }
                              },
                              {
                                  "block": "text",
                                  "elem": "word",
                                  "elemMods": {
                                      "width": "s"
                                  }
                              }
                          ]
                      },
                      {
                          "block": "text",
                          "mods": {
                              "view": "primary",
                              "size": "l"
                          },
                          "content": [
                              {
                                  "block": "text",
                                  "elem": "word",
                                  "elemMods": {
                                      "width": "l"
                                  }
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ]
}`