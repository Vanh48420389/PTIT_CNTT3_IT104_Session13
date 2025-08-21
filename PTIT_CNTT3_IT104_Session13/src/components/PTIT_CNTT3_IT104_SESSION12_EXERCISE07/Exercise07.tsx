import React, { Component } from "react";

type AppState = {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
};

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: "dark",
      language: "english",
    };
  }

  render() {
    const containerStyle = {
      backgroundColor: this.state.theme === "light" ? "#fff" : "#000",
      color: this.state.theme === "light" ? "#000" : "#fff",
      
    };

    const themeText = this.state.theme === "light" ? "Sáng" : "Tối";

    const languageText =
      this.state.language === "vietnamese" ? "Tiếng Việt" : "English";

    return (
      <div style={containerStyle}>
        <h2>Nền: {themeText}</h2>
        <h2>Ngôn ngữ: {languageText}</h2>
      </div>
    );
  }
}
