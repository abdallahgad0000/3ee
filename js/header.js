let navEbooks = document.getElementById("navEbooks");
let navEbooksDiv = document.getElementById("navEbooksDiv");

let navAudioBooks = document.getElementById("navAudioBooks");
let navAudioBooksDiv = document.getElementById("navAudioBooksDiv");

let navPanel = document.getElementById("navPanel");
let navAudioBooksPanel = document.getElementById("navAudioBooksPanel");

//  ---------------  hover over nav books

$(navEbooks).hover(
  () => {
    $(navPanel).css({
      display: "block",
    });
    $(navEbooksDiv).css({
      display: "block",
    });
    $("#navEbooks i").removeClass("fa-chevron-down");
    $("#navEbooks i").addClass("fa-chevron-up");
    $(navEbooks).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"
    })
  },
  () => {
    $(navPanel).css({
      display: "none",
    });
    $(navEbooksDiv).css({
      display: "none",
    });
    $("#navEbooks i").addClass("fa-chevron-down");
    $("#navEbooks i").removeClass("fa-chevron-up");
    $(navEbooks).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"
    })
  }
);




$(navPanel).hover(
  () => {
    $(navPanel).css({
      display: "block",
    });
    $(navEbooksDiv).css({
      display: "block",
    });
    $("#navEbooks i").removeClass("fa-chevron-down");
    $("#navEbooks i").addClass("fa-chevron-up");
    $(navEbooks).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"
    })
  },
  () => {
    $(navPanel).css({
      display: "none",
    });
    $(navEbooksDiv).css({
      display: "none",
    });
    $("#navEbooks i").addClass("fa-chevron-down");
    $("#navEbooks i").removeClass("fa-chevron-up");
      $(navEbooks).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"
    })
  }
);








// --------------- hover over audios -----------------------


$(navAudioBooks).hover(
  () => {
    $(navAudioBooksPanel).css({
      display: "block",
    });
    $(navAudioBooksDiv).css({
      display: "block",
    });
    $("#navAudioBooks i").removeClass("fa-chevron-down");
    $("#navAudioBooks i").addClass("fa-chevron-up");
    $(navAudioBooks).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"

    })
  },
  () => {
    $(navAudioBooksPanel).css({
      display: "none",
    });
    $(navAudioBooksDiv).css({
      display: "none",
    });
    $("#navAudioBooks i").addClass("fa-chevron-down");
    $("#navAudioBooks i").removeClass("fa-chevron-up");
    $(navAudioBooks).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"

    })
  }
);

$(navAudioBooksPanel).hover(
  () => {
    $(navAudioBooksPanel).css({
      display: "block",
    });
    $(navAudioBooksDiv).css({
      display: "block",
    });
    $("#navAudioBooks i").removeClass("fa-chevron-down");
    $("#navAudioBooks i").addClass("fa-chevron-up");
    $(navAudioBooks).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"
    })
  },
  () => {
    $(navAudioBooksPanel).css({
      display: "none",
    });
    $(navAudioBooksDiv).css({
      display: "none",
    });
    $("#navAudioBooks i").addClass("fa-chevron-down");
    $("#navAudioBooks i").removeClass("fa-chevron-up");
    $(navAudioBooks).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"
    })
  }
);


// ---------------- hover over videos ---------------------
let navVideosPanel = document.getElementById("navVideosPanel");
let navVideos = document.getElementById("navVideos");
let navVideosDiv = document.getElementById("navVideosDiv");


$(navVideos).hover(
  () => {
    $(navVideosPanel).css({
      display: "block",
    });
    $(navVideosDiv).css({
      display: "block",
    });
    $("#navVideos i").removeClass("fa-chevron-down");
    $("#navVideos i").addClass("fa-chevron-up");
    $(navVideos).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"

    })
  },
  () => {
    $(navVideosPanel).css({
      display: "none",
    });
    $(navVideosDiv).css({
      display: "none",
    });
    $("#navVideos i").addClass("fa-chevron-down");
    $("#navVideos i").removeClass("fa-chevron-up");
    $(navVideos).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"

    })
  }
);

$(navVideosPanel).hover(
  () => {
    $(navVideosPanel).css({
      display: "block",
    });
    $(navVideosDiv).css({
      display: "block",
    });
    $("#navVideos i").removeClass("fa-chevron-down");
    $("#navVideos i").addClass("fa-chevron-up");
    $(navVideos).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"
    })
  },
  () => {
    $(navVideosPanel).css({
      display: "none",
    });
    $(navVideosDiv).css({
      display: "none",
    });
    $("#navVideos i").addClass("fa-chevron-down");
    $("#navVideos i").removeClass("fa-chevron-up");
    $(navVideos).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"
    })
  }
);


// -------------------- hover over authors nav ------------------------ 

let navAuthorsPanel = document.getElementById("navAuthorsPanel");
let navAuthors = document.getElementById("navAuthors");
let navAuthorsDiv = document.getElementById("navAuthorsDiv");


$(navAuthors).hover(
  () => {
    $(navAuthorsPanel).css({
      display: "block",
    });
    $(navAuthorsDiv).css({
      display: "block",
    });
    $("#navAuthors i").removeClass("fa-chevron-down");
    $("#navAuthors i").addClass("fa-chevron-up");
    $(navAuthors).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"

    })
  },
  () => {
    $(navAuthorsPanel).css({
      display: "none",
    });
    $(navAuthorsDiv).css({
      display: "none",
    });
    $("#navAuthors i").addClass("fa-chevron-down");
    $("#navAuthors i").removeClass("fa-chevron-up");
    $(navAuthors).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"

    })
  }
);

$(navAuthorsPanel).hover(
  () => {
    $(navAuthorsPanel).css({
      display: "block",
    });
    $(navAuthorsDiv).css({
      display: "block",
    });
    $("#navAuthors i").removeClass("fa-chevron-down");
    $("#navAuthors i").addClass("fa-chevron-up");
    $(navAuthors).css({
        "color" : "#1ed660",
        "boxShadow" : "0 0 5px 2px rgb(0 0 0 / 15%)",
        "backgroundColor":"#fff"
    })
  },
  () => {
    $(navAuthorsPanel).css({
      display: "none",
    });
    $(navAuthorsDiv).css({
      display: "none",
    });
    $("#navAuthors i").addClass("fa-chevron-down");
    $("#navAuthors i").removeClass("fa-chevron-up");
    $(navAuthors).css({
        "color" : "#fff",
        "boxShadow" : "none",
        "backgroundColor":"#1ed660"
    })
  }
);






