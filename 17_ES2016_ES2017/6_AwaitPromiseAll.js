async function getMovieData(first, second) {
    var movieList = await Promise.all([
        $.getJSON(`https://www.omdbapi.com?t=${first}&apikey=thewdb`),
        $.getJSON(`https://www.omdbapi.com?t=${second}&apikey=thewdb`)
    ])

    console.log(movieList[0].Year);
    console.log(movieList[1].Year);
}

getMovieData('shrek','blade');