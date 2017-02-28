var _url = "https://rawgit.com/goit-fe/markup_fe2o/master/js_19-20/data.json";

$.getJSON(_url, function(json){
  var result = json;
  console.log(result);
  console.log('----------------------------------------');

//   1) Skils
      var skilsArr =  _.map(result, 'skills');
          skilsArr = _.flattenDeep(skilsArr);
          skilsArr = _.uniq(skilsArr);
          skilsArr = _.map(skilsArr, function (a) {
                var nameA = a.toLowerCase();
                return nameA;
               }, []);
          skilsArr = _.sortBy(skilsArr);
      console.log('Skils sorted by а b c', skilsArr);
      console.log('----------------------------------------');

//   2) Names

       var namesArr = _.sortBy(result, 'friends.length');
           namesArr = _.map(result, 'name');
           console.log('Names according  ammount of friends', namesArr);
           console.log('----------------------------------------');

//   3) Friens names

        var friendsArr = _.map(result, 'friends');
            friendsArr = _.flattenDeep(friendsArr);
            friendsArr = _.map(friendsArr, 'name');
            friendsArr = _.uniq(friendsArr);
            console.log('Uniq Friend Names', friendsArr);
            console.log('----------------------------------------');

    });
