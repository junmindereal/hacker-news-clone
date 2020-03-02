import React, { Component, Fragment } from "react";
import Pagination from "react-js-pagination";
import { BubbleSpinLoader } from "react-css-loaders2";
import { getStoryIds, getStories } from "../services/storyService";
import { paginate } from "../utils/helpers";

class StoriesList extends Component {
  state = {
    stories: [],
    currentPage: 1,
    pageSize: 10,
    pageLimit: 5,
    loading: true
  };

  componentDidMount() {
    this.handleStories();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.setState({ loading: true });
      this.handleStories();
    }
  }

  async handleStories() {
    const { data: ids } = await getStoryIds(this.props.type);
    let stories = await getStories(ids);
    stories = stories.map(s => s.data).slice(0, 100);
    this.setState({ stories, totalCount: stories.length, loading: false });
  }

  getPageData = () => {
    const { currentPage, pageSize, stories: allStories } = this.state;
    const stories = paginate(allStories, currentPage, pageSize);

    return { data: stories };
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const classes = {
      pagination: `pagination
        flex
        justify-center
        my-6`,
      paginItem: `mx-1
        text-primary1
        rounded
        hover:bg-primary3`,
      paginLink: `px-3
        py-2`,
      paginDisabled: `disabled
        text-primary3
        pointer-events-none
        hover:bg-bgPrimary1`
    };

    const {
      pageSize,
      currentPage,
      totalCount,
      pageLimit,
      loading
    } = this.state;
    const { data: stories } = this.getPageData();

    return (
      <Fragment>
        {loading ? (
          <BubbleSpinLoader color={"#423D33"} size={8} />
        ) : (
          <Fragment>
            <StoriesList stories={stories} />
            <Pagination
              firstPageText="first"
              lastPageText="last"
              prevPageText="prev"
              nextPageText="next"
              disabledClass={classes.paginDisabled}
              innerClass={classes.pagination}
              itemClass={classes.paginItem}
              linkClass={classes.paginLink}
              activePage={currentPage}
              itemsCountPerPage={pageSize}
              totalItemsCount={totalCount}
              pageRangeDisplayed={pageLimit}
              onChange={this.handlePageChange.bind(this)}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default StoriesList;
