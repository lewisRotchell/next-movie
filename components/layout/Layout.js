import Footer from "./Footer";
import MainHeader from "./mainHeader";
import classes from "./Layout.module.scss";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <MainHeader />
      <div className={classes.content}>{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
