import React, { Component, Fragment } from "react";
import Pagination from "react-js-pagination";
import { BubbleSpinLoader } from "react-css-loaders2";
import Title from "./Title";
import StoryMeta from "./StoryMeta";
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
    stories = stories.map(s => s.data);
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
      cardsContainer: `mt-12`,
      card: `p-6
        bg-bgPrimary2
        border-b-2
        border-bgPrimary1
        rounded`,
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
            <ul className={classes.cardsContainer}>
              {stories.map(story => (
                <li key={story.id} className={classes.card}>
                  <Title url={story.url} id={story.id} title={story.title} />
                  <StoryMeta
                    by={story.by}
                    id={story.id}
                    time={story.time}
                    descendants={story.descendants}
                  />
                </li>
              ))}
            </ul>
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
