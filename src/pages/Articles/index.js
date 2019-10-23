import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../store";
import types from "../../store/actionTypes";
class ArticleList extends Component {
  componentDidMount() {
    store.dispatch({ type: types.ARTICLES_FETCH_REQUESTED });
  }
  render() {
    const { list } = this.props;
    return <div>一共有{list.length}篇文章</div>;
  }
}

const mapStateToProps = ({ articles }) => {
  return {
    list: articles.list
  };
};
export default connect(mapStateToProps)(ArticleList);
