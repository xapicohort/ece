var video = "xYVtpITHvbs"; // Sample video hosted on youtube times bm-13 bg-19 im-25 h-33

  var myXAPI = {};

  ADL.launch(function (err, launchdata, xAPIWrapper) {
    if (!err) {
      ADL.XAPIWrapper = xAPIWrapper;
      myXAPI.actor = launchdata.actor;
      if (launchdata.customData.content) {
        myXAPI.context = {contextActivities: {grouping: [{id: launchdata.customData.content}]}};
      } else {
        myXAPI.context = {contextActivities: {grouping: [{id: "http://ecexapi/no-customData"}]}};//change
      }
    } else {
      ADL.XAPIWrapper.changeConfig({
        "endpoint":"https://ecexapi-f2020.lrs.io:443/xapi/",//veracity trial endpoint for ecef2020
        "username":"owiroj",//veracity trial username for ecef2020
        "password":"fusrof"//veracity trial password for ecef2020
      });
      myXAPI.actor = {  //create registration to capture this data
        "mbox": "mailto:tester@ecexapi.com",  //change
        "name": "videoTester",  //change
        "objectType": "Agent"  
    };
      myXAPI.context = {contextActivities: {grouping: [{id: "http://ecexapi.com/fall2020/video"}]}};//to do - build out more
    }

    myXAPI.object = {
      id: "https://www.youtube.com/watch?v=" + video, 
    definition: {name: {"en-US": "Sample Video"}}};//to do - build out more

    ADL.XAPIYoutubeStatements.changeConfig(myXAPI);

  }, true);

  function initYT() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: video,
      playerVars: { 'autoplay': 0, 'disablekb': 1 },
      events: {
        'onReady': ADL.XAPIYoutubeStatements.onPlayerReady,
        'onStateChange': ADL.XAPIYoutubeStatements.onStateChange
      }
    });
  }

  initYT();

(function(ADL){

    var debug = true;
    var log = function(message)
    {
      if (!debug) return false;
      try
      {
        console.log(message);
        return true;
      }
      catch(e) { return false; }
    }

    XAPIYoutubeStatements = function() {

      var actor = {};
      var object = {};
      var context = {};

      var started = false;
      var completed = false;

      this.changeConfig = function(myXAPI) {
        actor = myXAPI.actor;
        object = myXAPI.object;
        context = myXAPI.context;
      }

      this.onPlayerReady = function(event) {
        var message = "yt: player ready";
        log(message);
        window.onunload = exitVideo;
      }

      this.onStateChange = function(event) {
        var curTime = player.getCurrentTime().toString();
        var ISOTime = "PT" + curTime.slice(0, curTime.indexOf(".")+3) + "S";
        var stmt = null;
        var e = "";
        switch(event.data) {
          case -1:
            e = "unstarted";
            log("yt: " + e);
            stmt = initializeVideo(ISOTime);
            break;
          case 0:
            e = "ended";
            log("yt: " + e);
            stmt = completeVideo(ISOTime);
            break;
          case 1:
            e = "playing";
            stmt = playVideo(ISOTime);
            break;
          default:
        }
        if (stmt){
          ADL.XAPIWrapper.sendStatement(stmt);
        }
      }

      function buildStatement(stmt) {
        if (stmt){
          var stmt = stmt;
          stmt.actor = actor;
          stmt.object = object;
          stmt.context = context;
        }
        return stmt;
      }

      function initializeVideo(ISOTime) {
        var stmt = {};

        stmt.verb = {
          id: "http://adlnet.gov/expapi/verbs/initialized",
          display: {"en-US": "initialized"}
        };

        return buildStatement(stmt);
      }

      function playVideo(ISOTime) {
        var stmt = {};

        stmt.verb = {
          id: "https://w3id.org/xapi/video/verbs/played",
          display: {"en-US": "played"}
        };

        return buildStatement(stmt);
      }

      function completeVideo(ISOTime) {
      /*  if (completed) {
          return null;
        }
*/
        var stmt = {};

        stmt.verb = {
          id: "http://adlnet.gov/expapi/verbs/completed",
          display: {"en-US": "completed"}
        }
        stmt.result = {"duration":ISOTime, "completion": true};
        completed = true;

        return buildStatement(stmt);
      }

      function exitVideo() {
        if (!started) {
          return;
        }

        var stmt = {};
        var e = "";

        // 'terminated' statement for completed video
        if (completed) {
          e = "terminated";
          stmt.verb = {
            id: "ttp://adlnet.gov/expapi/verbs/terminated",
            display: { "en-US": "terminated" }
          };
          // 'abandoned' statement for incomplete video
        } else {
          e = "abandoned";
          stmt.verb = {
            id: "ttp://adlnet.gov/expapi/verbs/abandonded",
            display: { "en-US": "abandoned" }
          };
        }

        // send statement immediately to avoid event delay
        ADL.XAPIWrapper.sendStatement(buildStatement(stmt));
      }

    }

    ADL.XAPIYoutubeStatements = new XAPIYoutubeStatements();

    ADL.XAPIYoutubeStatements.onPlayerReadyCallback = function(message) {};
    ADL.XAPIYoutubeStatements.onStateChangeCallback = function(stmt) {};

}(window.ADL = window.ADL || {}));
