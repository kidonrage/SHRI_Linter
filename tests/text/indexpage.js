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
          "block": "layout",
          "content": [
              {
                  "block": "layout",
                  "elem": "container",
                  "mix": [
                      {
                          "block": "section",
                          "mods": {
                              "indent-b": "xxl"
                          }
                      }
                  ],
                  "elemMods": {
                      "size": "m",
                      "align": "center"
                  },
                  "content": [
                      {
                          "block": "grid",
                          "mods": {
                              "col-gap": "full",
                              "row-gap": "full",
                              "m-columns": 12
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
                                          "block": "warning",
                                          "mix": [
                                              {
                                                  "block": "informer",
                                                  "mods": {
                                                      "border": "all",
                                                      "view": "default"
                                                  }
                                              },
                                              {
                                                  "block": "theme",
                                                  "mods": {
                                                      "color": "project-warning"
                                                  }
                                              }
                                          ],
                                          "content": [
                                              {
                                                  "block": "warning",
                                                  "elem": "content",
                                                  "mix": [
                                                      {
                                                          "block": "informer",
                                                          "elem": "content",
                                                          "elemMods": {
                                                              "distribute": "center",
                                                              "space-a": "xxl"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "placeholder",
                                                          "mods": {
                                                              "view": "primary",
                                                              "size": "m"
                                                          }
                                                      },
                                                      {
                                                          "block": "text",
                                                          "mods": {
                                                              "view": "primary",
                                                              "size": "xl",
                                                              "align": "center"
                                                          },
                                                          "content": [
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
                                                                      "width": "m"
                                                                  }
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              },
                                              {
                                                  "block": "warning",
                                                  "elem": "button-wrapper",
                                                  "mix": [
                                                      {
                                                          "block": "informer",
                                                          "elem": "action",
                                                          "elemMods": {
                                                              "distribute": "center",
                                                              "space-a": "xl"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "button",
                                                          "mods": {
                                                              "size": "l"
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
                                          "block": "payment",
                                          "mix": [
                                              {
                                                  "block": "form"
                                              },
                                              {
                                                  "block": "form",
                                                  "mods": {
                                                      "border": "all",
                                                      "view": "default"
                                                  }
                                              }
                                          ],
                                          "content": [
                                              {
                                                  "block": "payment",
                                                  "elem": "header",
                                                  "mix": [
                                                      {
                                                          "block": "form",
                                                          "elem": "header"
                                                      },
                                                      {
                                                          "block": "form",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "space-v": "l",
                                                              "space-h": "xl",
                                                              "border": "bottom"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "text",
                                                          "mods": {
                                                              "view": "primary",
                                                              "size": "xxl"
                                                          },
                                                          "content": {
                                                              "block": "text",
                                                              "elem": "word",
                                                              "elemMods": {
                                                                  "width": "l"
                                                              }
                                                          }
                                                      }
                                                  ]
                                              },
                                              {
                                                  "block": "payment",
                                                  "elem": "content",
                                                  "mix": [
                                                      {
                                                          "block": "form",
                                                          "elem": "content"
                                                      },
                                                      {
                                                          "block": "form",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "space-v": "xxxl",
                                                              "space-h": "xl",
                                                              "border": "bottom"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "form",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "indent-b": "xl",
                                                              "distribute": "between",
                                                              "vertical-align": "center"
                                                          },
                                                          "content": [
                                                              {
                                                                  "block": "form",
                                                                  "elem": "label",
                                                                  "elemMods": {
                                                                      "width": "default"
                                                                  },
                                                                  "mix": [
                                                                      {
                                                                          "block": "text",
                                                                          "mods": {
                                                                              "view": "primary",
                                                                              "size": "l"
                                                                          }
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
                                                                  "block": "form",
                                                                  "elem": "control",
                                                                  "content": {
                                                                      "block": "input",
                                                                      "mods": {
                                                                          "size": "l"
                                                                      }
                                                                  }
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "form",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "indent-b": "xl",
                                                              "distribute": "between",
                                                              "vertical-align": "center"
                                                          },
                                                          "content": [
                                                              {
                                                                  "block": "form",
                                                                  "elem": "label",
                                                                  "elemMods": {
                                                                      "width": "default"
                                                                  },
                                                                  "mix": [
                                                                      {
                                                                          "block": "text",
                                                                          "mods": {
                                                                              "view": "primary",
                                                                              "size": "l"
                                                                          }
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
                                                                  "block": "form",
                                                                  "elem": "control",
                                                                  "content": {
                                                                      "block": "input",
                                                                      "mods": {
                                                                          "size": "l"
                                                                      }
                                                                  }
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              },
                                              {
                                                  "block": "payment",
                                                  "elem": "footer",
                                                  "mix": [
                                                      {
                                                          "block": "form",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "distribute": "between",
                                                              "vertical-align": "center",
                                                              "space-v": "l",
                                                              "space-h": "xl"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "form",
                                                          "elem": "label",
                                                          "elemMods": {
                                                              "width": "default"
                                                          },
                                                          "mix": [
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "view": "primary",
                                                                      "size": "l"
                                                                  }
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
                                                          "block": "form",
                                                          "elem": "control",
                                                          "content": [
                                                              {
                                                                  "block": "button",
                                                                  "mods": {
                                                                      "size": "l"
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
              },
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
                              "indent-b": "xxl"
                          }
                      }
                  ],
                  "content": [
                      {
                          "block": "grid",
                          "mods": {
                              "col-gap": "half",
                              "row-gap": "half",
                              "m-columns": 10
                          },
                          "content": [
                              {
                                  "block": "grid",
                                  "elem": "fraction",
                                  "elemMods": {
                                      "m-col": 2
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
                                                                      "color": "project-inverse"
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
                                      "m-col": 2
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
                                                                      "color": "project-inverse"
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
                                      "m-col": 2
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
                                                                      "color": "project-inverse"
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
                                      "m-col": 2
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
                                                                      "color": "project-inverse"
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
                                      "m-col": 2
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
                                                                      "color": "project-inverse"
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
              },
              {
                  "block": "layout",
                  "elem": "container",
                  "elemMods": {
                      "size": "m",
                      "align": "center"
                  },
                  "content": [
                      {
                          "block": "grid",
                          "mods": {
                              "col-gap": "full",
                              "row-gap": "full",
                              "m-columns": 10
                          },
                          "content": [
                              {
                                  "block": "grid",
                                  "elem": "fraction",
                                  "elemMods": {
                                      "m-col": 5
                                  },
                                  "content": [
                                      {
                                          "block": "history",
                                          "content": [
                                              {
                                                  "block": "history",
                                                  "elem": "transaction",
                                                  "elemMods": {
                                                      "brand": "blue"
                                                  },
                                                  "mix": [
                                                      {
                                                          "block": "e-accordion"
                                                      },
                                                      {
                                                          "block": "list",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "border": "bottom",
                                                              "space-a": "m"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "history",
                                                          "elem": "show",
                                                          "elemMods": {
                                                              "brand": "blue"
                                                          },
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "short"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "vertical-align": "center",
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "details",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "time",
                                                                          "content": [
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                              },
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "destination",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "icon-plus",
                                                                                  "mods": {
                                                                                      "vertical-align": "center"
                                                                                  }
                                                                              }
                                                                          ],
                                                                          "content": [
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "pic",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "icon",
                                                                                          "elemMods": {
                                                                                              "indent-r": "s",
                                                                                              "indent-l": "l"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "content": [
                                                                                      {
                                                                                          "block": "brand-logo",
                                                                                          "mods": {
                                                                                              "size": "m",
                                                                                              "name": "blue"
                                                                                          }
                                                                                      }
                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "label",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "block"
                                                                                      },
                                                                                      {
                                                                                          "block": "text",
                                                                                          "mods": {
                                                                                              "view": "primary",
                                                                                              "size": "l"
                                                                                          }
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
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "history",
                                                                  "elem": "quantity",
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
                                                                                      "width": "m"
                                                                                  }
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "history",
                                                          "elem": "hide",
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "more"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "info",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "description",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "indent-b": "m"
                                                                                  }
                                                                              }
                                                                          ],
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
                                                                                              "width": "m"
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
                                                                                              "width": "m"
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
                                                                              }
                                                                          ]
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "actions",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "distribute": "between",
                                                                                      "indent-b": "l"
                                                                                  }
                                                                              }
                                                                          ],
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
                                              },
                                              {
                                                  "block": "history",
                                                  "elem": "transaction",
                                                  "elemMods": {
                                                      "brand": "purple"
                                                  },
                                                  "mix": [
                                                      {
                                                          "block": "e-accordion"
                                                      },
                                                      {
                                                          "block": "list",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "border": "bottom",
                                                              "space-a": "m"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "history",
                                                          "elem": "show",
                                                          "elemMods": {
                                                              "brand": "purple"
                                                          },
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "short"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "vertical-align": "center",
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "details",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "time",
                                                                          "content": [
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                              },
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "destination",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "icon-plus",
                                                                                  "mods": {
                                                                                      "vertical-align": "center"
                                                                                  }
                                                                              }
                                                                          ],
                                                                          "content": [
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "pic",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "icon",
                                                                                          "elemMods": {
                                                                                              "indent-r": "s",
                                                                                              "indent-l": "l"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "content": [
                                                                                      {
                                                                                          "block": "brand-logo",
                                                                                          "mods": {
                                                                                              "size": "m",
                                                                                              "name": "purple"
                                                                                          }
                                                                                      }
                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "label",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "block"
                                                                                      },
                                                                                      {
                                                                                          "block": "text",
                                                                                          "mods": {
                                                                                              "view": "primary",
                                                                                              "size": "l"
                                                                                          }
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
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "history",
                                                                  "elem": "quantity",
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
                                                                                      "width": "m"
                                                                                  }
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "history",
                                                          "elem": "hide",
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "more"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "info",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "description",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "indent-b": "m"
                                                                                  }
                                                                              }
                                                                          ],
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
                                                                                              "width": "m"
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
                                                                                              "width": "m"
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
                                                                              }
                                                                          ]
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "actions",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "distribute": "between",
                                                                                      "indent-b": "l"
                                                                                  }
                                                                              }
                                                                          ],
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
                                              },
                                              {
                                                  "block": "history",
                                                  "elem": "transaction",
                                                  "elemMods": {
                                                      "brand": "red"
                                                  },
                                                  "mix": [
                                                      {
                                                          "block": "e-accordion"
                                                      },
                                                      {
                                                          "block": "list",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "border": "bottom",
                                                              "space-a": "m"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "history",
                                                          "elem": "show",
                                                          "elemMods": {
                                                              "brand": "red"
                                                          },
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "short"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "vertical-align": "center",
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "details",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "time",
                                                                          "content": [
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                              },
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "destination",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "icon-plus",
                                                                                  "mods": {
                                                                                      "vertical-align": "center"
                                                                                  }
                                                                              }
                                                                          ],
                                                                          "content": [
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "pic",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "icon",
                                                                                          "elemMods": {
                                                                                              "indent-r": "s",
                                                                                              "indent-l": "l"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "content": [
                                                                                      {
                                                                                          "block": "brand-logo",
                                                                                          "mods": {
                                                                                              "size": "m",
                                                                                              "name": "red"
                                                                                          }
                                                                                      }
                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "label",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "block"
                                                                                      },
                                                                                      {
                                                                                          "block": "text",
                                                                                          "mods": {
                                                                                              "view": "primary",
                                                                                              "size": "l"
                                                                                          }
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
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "history",
                                                                  "elem": "quantity",
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
                                                                                      "width": "m"
                                                                                  }
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "history",
                                                          "elem": "hide",
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "more"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "info",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "description",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "indent-b": "m"
                                                                                  }
                                                                              }
                                                                          ],
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
                                                                                              "width": "m"
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
                                                                                              "width": "m"
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
                                                                              }
                                                                          ]
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "actions",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "distribute": "between",
                                                                                      "indent-b": "l"
                                                                                  }
                                                                              }
                                                                          ],
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
                                              },
                                              {
                                                  "block": "history",
                                                  "elem": "transaction",
                                                  "elemMods": {
                                                      "brand": "green"
                                                  },
                                                  "mix": [
                                                      {
                                                          "block": "e-accordion"
                                                      },
                                                      {
                                                          "block": "list",
                                                          "elem": "item",
                                                          "elemMods": {
                                                              "border": "bottom",
                                                              "space-a": "m"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "history",
                                                          "elem": "show",
                                                          "elemMods": {
                                                              "brand": "green"
                                                          },
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "short"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "vertical-align": "center",
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "details",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "time",
                                                                          "content": [
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                              },
                                                                              {
                                                                                  "block": "text",
                                                                                  "mods": {
                                                                                      "size": "s",
                                                                                      "view": "ghost"
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
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "destination",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "icon-plus",
                                                                                  "mods": {
                                                                                      "vertical-align": "center"
                                                                                  }
                                                                              }
                                                                          ],
                                                                          "content": [
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "pic",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "icon",
                                                                                          "elemMods": {
                                                                                              "indent-r": "s",
                                                                                              "indent-l": "l"
                                                                                          }
                                                                                      }
                                                                                  ],
                                                                                  "content": [
                                                                                      {
                                                                                          "block": "brand-logo",
                                                                                          "mods": {
                                                                                              "size": "m",
                                                                                              "name": "green"
                                                                                          }
                                                                                      }
                                                                                  ]
                                                                              },
                                                                              {
                                                                                  "block": "history",
                                                                                  "elem": "label",
                                                                                  "mix": [
                                                                                      {
                                                                                          "block": "icon-plus",
                                                                                          "elem": "block"
                                                                                      },
                                                                                      {
                                                                                          "block": "text",
                                                                                          "mods": {
                                                                                              "view": "primary",
                                                                                              "size": "l"
                                                                                          }
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
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "history",
                                                                  "elem": "quantity",
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
                                                                                      "width": "m"
                                                                                  }
                                                                              }
                                                                          ]
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "history",
                                                          "elem": "hide",
                                                          "mix": [
                                                              {
                                                                  "block": "e-accordion",
                                                                  "elem": "more"
                                                              },
                                                              {
                                                                  "block": "list",
                                                                  "elem": "item",
                                                                  "elemMods": {
                                                                      "indent-t": "m"
                                                                  }
                                                              }
                                                          ],
                                                          "content": [
                                                              {
                                                                  "block": "history",
                                                                  "elem": "info",
                                                                  "content": [
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "description",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "indent-b": "m"
                                                                                  }
                                                                              }
                                                                          ],
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
                                                                                              "width": "m"
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
                                                                                              "width": "m"
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
                                                                              }
                                                                          ]
                                                                      },
                                                                      {
                                                                          "block": "history",
                                                                          "elem": "actions",
                                                                          "mix": [
                                                                              {
                                                                                  "block": "list",
                                                                                  "elem": "item",
                                                                                  "elemMods": {
                                                                                      "distribute": "between",
                                                                                      "indent-b": "l"
                                                                                  }
                                                                              }
                                                                          ],
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
                                          ],
                                          "mix": [
                                              {
                                                  "block": "list",
                                                  "mods": {
                                                      "view": "default",
                                                      "border": "all"
                                                  }
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "block": "grid",
                                  "elem": "fraction",
                                  "elemMods": {
                                      "m-col": 5
                                  },
                                  "content": [
                                      {
                                          "block": "event",
                                          "mods": {
                                              "brand": "blue"
                                          },
                                          "mix": [
                                              {
                                                  "block": "theme",
                                                  "mods": {
                                                      "color": "project-inverse"
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
                                                  "block": "event",
                                                  "elem": "content",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "elem": "content",
                                                          "elemMods": {
                                                              "vertical-align": "center",
                                                              "space-a": "xxxl",
                                                              "distribute": "center"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "event",
                                                          "elem": "preview",
                                                          "content": [
                                                              {
                                                                  "block": "avatar",
                                                                  "mods": {
                                                                      "size": "m"
                                                                  },
                                                                  "mix": [
                                                                      {
                                                                          "block": "event",
                                                                          "elem": "speaker"
                                                                      }
                                                                  ]
                                                              },
                                                              {
                                                                  "block": "brand-logo",
                                                                  "mods": {
                                                                      "name": "blue",
                                                                      "size": "m"
                                                                  }
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "block": "event",
                                                          "elem": "title",
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "view": "primary",
                                                                      "size": "xxl",
                                                                      "align": "center"
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
                                                      },
                                                      {
                                                          "block": "event",
                                                          "elem": "description",
                                                          "content": [
                                                              {
                                                                  "block": "text",
                                                                  "mods": {
                                                                      "view": "primary",
                                                                      "size": "l",
                                                                      "align": "center"
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
                                                                              "width": "l"
                                                                          }
                                                                      }
                                                                  ]
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              },
                                              {
                                                  "block": "event",
                                                  "elem": "footer",
                                                  "mix": [
                                                      {
                                                          "block": "card",
                                                          "elem": "footer",
                                                          "elemMods": {
                                                              "vertical-align": "center",
                                                              "distribute": "center",
                                                              "space-a": "xxl"
                                                          }
                                                      }
                                                  ],
                                                  "content": [
                                                      {
                                                          "block": "text",
                                                          "mods": {
                                                              "view": "link",
                                                              "size": "xl",
                                                              "align": "center"
                                                          },
                                                          "content": [
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