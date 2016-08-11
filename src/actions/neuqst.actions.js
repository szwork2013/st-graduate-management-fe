/**
 * Created by qoder on 16/6/11.
 */
import * as  ACTIONS from './consts';
import 'whatwg-fetch';
import API from '../api/requsetConfig';

export function showTips(tip) {
  return {
    type: ACTIONS.SHOW_TIPS,
    tip
  }
}


export function hideTips() {
  return {
    type: ACTIONS.HIDE_TIPS
  }
}


export function showLoading() {
  return {
    type: ACTIONS.SHOW_LOADING
  }
}


export function hideLoading() {
  return {
    type: ACTIONS.HIDE_LOADING
  }
}


export function showDropMenu() {
  return {
    type: ACTIONS.SHOW_DROPMENU
  }
}


export function hideDropMenu() {
  return {
    type: ACTIONS.HIDE_DROPMENU
  }
}

export function showChanPass() {
  return {
    type: ACTIONS.SHOW_CHANPASS
  }
}


export function hideChanPass() {
  return {
    type: ACTIONS.HIDE_CHANPASS
  }
}


export function changePage(index = 1, size = 10) {
  return {
    type: ACTIONS.CHANGE_PAGE,
    get: fetch(API.admin + '?start=' + index + '&pageSize=' + size)
  }
}

export function changePageSucc(page = [], curPage = 1, count = 0) {
  return {
    type: ACTIONS.CHANGE_PAGE_SUCCESS,
    page,
    curPage,
    count
  }
}


export function showConfirm(header, body, id) {
  return {
    type: ACTIONS.SHOW_CONFIRM,
    show: "block",
    header,
    body,
    id
  }
}


export function hideConfirm() {
  return {
    type: ACTIONS.HIDE_CONFIRM,
    show: 'none'
  }
}

export function showEditAdmin(data) {
  return {
    type: ACTIONS.SHOW_EDIT_ADMIN,
    show: true,
    data
  }
}


export function hideEditAdmin() {
  return {
    type: ACTIONS.HIDE_EDIT_ADMIN,
    show: false
  }
}

export function showChangeAdminPass(id) {
  return {
    type: ACTIONS.SHOW_CHANGE_ADMIN_PASS,
    show: true,
    id
  }
}

export function hideChangeAdminPass() {
  return {
    type: ACTIONS.HIDE_CHANGE_ADMIN_PASS,
    show: false
  }
}

export function getMyMess(users) {
  return {
    type: ACTIONS.GET_MY_MESS,
    users
  }
}


export function editMyMess(show) {
  return {
    type: ACTIONS.EDIT_MY_MESS,
    show
  }
}

/**
 * 异步action开始
 * @returns {{type}}
 */
export function showSearchStu() {
  return {
    type: ACTIONS.SHOW_SEARCH_STU
  }
}


export function hideSearchStu() {
  return {
    type: ACTIONS.HIDE_SEARCH_STU
  }
}

