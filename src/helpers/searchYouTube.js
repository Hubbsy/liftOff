import $ from 'jquery';

const searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key, 
    maxResults: max, 
    q: query, 
    type:'video', 
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach(err => console.log(err))
  });
};


export default searchYouTube; 