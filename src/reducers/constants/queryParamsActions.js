import {
    PAGE_INDEX_CHANGED,
    SEARCH_INPUT_UPDATED,
  } from '../constants/QueryParamsActionTypes';
  

  export function pageIndexChange(index) {
    return {
      type: PAGE_INDEX_CHANGED,
      payload: index,
    };
  }
  
  export function searchTermUpdate(text) {
    return {
      type: SEARCH_INPUT_UPDATED,
      payload: text,
    };
  }