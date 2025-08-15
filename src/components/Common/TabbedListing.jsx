"use client";
/**
 * Generic Tabbed Listing Component
 * Reusable component for Videos, Webstories, etc.
 */
import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../Styles/css/elements/custom-react-tabs.css";
import "../../Styles/css/widgets/catgory-tab-widget.css";
import "../../Styles/css/grid/listing-grid/listing-grid.css";

import LoadMoreButton from "./LoadMoreButton";
import { usePaginatedListing } from "../../hooks/usePaginatedListing";

const TabbedListing = ({
  items = [],
  renderItem,
  itemsPerPage = 9,
  categoryKey = "categories",
  loadMoreLabel = "More Items",
  gridClassName = "LsGrdLyt_ul LsGrdLyt_ul-3",
}) => {
  const {
    visibleCounts,
    loading,
    uniqueCategories,
    handleLoadMore,
    getFilteredItems,
    shouldFadeIn,
    hasMoreItems,
  } = usePaginatedListing(items, itemsPerPage);

  return (
    <Tabs>
      <div className="DcCatTb_wr">
        {/* Tab Headers */}
        <div className="DcCatTb_tp">
          <TabList className="DcCatTb_ul">
            {uniqueCategories.map((category, index) => (
              <Tab
                key={index}
                className="DcCatTb_li"
                selectedClassName="DcCatTb_lk-act"
              >
                <div className="DcCatTb_lk">{category.toUpperCase()}</div>
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Tab Content */}
        <div className="DcCatTb_bt">
          {uniqueCategories.map((category, index) => (
            <TabPanel key={index} className="custom-tab-panel">
              <div className={gridClassName}>
                {getFilteredItems(category, categoryKey)
                  .slice(0, visibleCounts[category])
                  .map((item, itemIndex) => {
                    const isFadeIn = shouldFadeIn(itemIndex);
                    return (
                      <div
                        className={`LsGrdLyt_li${isFadeIn ? " fade-in" : ""}`}
                        key={itemIndex}
                        style={
                          isFadeIn
                            ? {
                                animationDelay: `${
                                  (itemIndex -
                                    (visibleCounts[category] - itemsPerPage)) *
                                  0.1
                                }s`,
                              }
                            : {}
                        }
                      >
                        {renderItem(item)}
                      </div>
                    );
                  })}
              </div>

              {/* Load More Button */}
              {hasMoreItems(category, categoryKey) && (
                <LoadMoreButton
                  onClick={(e) => handleLoadMore(e, category)}
                  loading={loading}
                  label={`${loadMoreLabel} ${
                    category !== "all" ? category : ""
                  }`}
                />
              )}
            </TabPanel>
          ))}
        </div>
      </div>
    </Tabs>
  );
};

export default TabbedListing;
