import React, { Component, Fragment } from "react";
import Pagination from "react-js-pagination";
import Title from "./Title";
import StoryMeta from "./StoryMeta";
import { getStoryIds, getStories } from "../services/storyService";
import { paginate } from "../utils/helpers";

class StoriesList extends Component {
  state = {
    stories: [],
    currentPage: 1,
    pageSize: 10,
    pageLimit: 5
  };

  async componentDidMount() {
    const { data: ids } = await getStoryIds("top");
    let stories = await getStories(ids);
    stories = stories.map(s => s.data);
    this.setState({ stories, totalCount: stories.length });
    console.log(this.state);
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
        py-2`
    };

    const { pageSize, currentPage, totalCount, pageLimit } = this.state;
    const { data: stories } = this.getPageData();

    return (
      <Fragment>
        <ul className={classes.cardsContainer}>
          {stories.map(story => (
            <li key={story.id} className={classes.card}>
              <Title url={story.url} title={story.title} />
              <StoryMeta
                by={story.by}
                time={story.time}
                descendants={story.descendants}
              />
            </li>
          ))}
        </ul>
        <Pagination
          hideDisabled
          firstPageText="first"
          lastPageText="last"
          prevPageText="prev"
          nextPageText="next"
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
    );
  }
}

export default StoriesList;
