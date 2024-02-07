// search.js

// 최근 검색어 클래스
class RecentSearch {
  constructor() {
    this.recentSearches = [];
    this.loadRecentSearches();
  }

  saveRecentSearches() {
    localStorage.setItem("recentSearches", JSON.stringify(this.recentSearches));
  }

  loadRecentSearches() {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      this.recentSearches = JSON.parse(storedSearches);
      this.updateRecentSearchList();
    }
  }

  addRecentSearch(searchQuery) {
    if (!this.recentSearches.includes(searchQuery)) {
      this.recentSearches.unshift(searchQuery);
      this.saveRecentSearches();
      this.updateRecentSearchList();
    }
  }

  updateRecentSearchList() {
    const recentSearchList = document.getElementById("recentSearchList");
    recentSearchList.innerHTML = "";

    this.recentSearches.forEach((searchQuery) => {
      const listItem = document.createElement("li");
      listItem.textContent = searchQuery;
      recentSearchList.appendChild(listItem);
    });
  }
}

// UI 클래스
class UIController {
  constructor() {
    this.searchInput = document.getElementById("searchInput");
    this.searchButton = document.getElementById("searchButton");
    this.recentSearch = new RecentSearch();
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.searchButton.addEventListener("click", () => this.handleSearch());
  }

  handleSearch() {
    const searchQuery = this.searchInput.value.trim();
    if (searchQuery !== "") {
      this.recentSearch.addRecentSearch(searchQuery);
      this.searchInput.value = "";
    }
  }
}

// 인스턴스 생성
const uiController = new UIController();
