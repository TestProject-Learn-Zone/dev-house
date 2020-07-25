// Components
import Header from "../components/Header";
import TagList from "../components/TagList";
import UserList from "../components/UserList";
import Footer from "../components/Footer";

const HomeView = {
  render: () => {
    return `
      <div class="main_app_section">
        ${Header.render()}
        <div class="tags_panel">${TagList.render()}</div>
          <div class="container-fluid">
            <div class="row equal">
            ${UserList.render()}
            </div>
          </div>
        </div>
        ${Footer.render()}
      </div>
      `;
  }
};

export default HomeView;
