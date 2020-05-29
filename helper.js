const url = "https://striveschool.herokuapp.com/api/movies/";

const getEvents = async () => {
    let response = await fetch(url, {
        headers: new Headers({ 
          'Authorization': 'Basic dXNlcjE6eldBM0QzdlVNUnNicHJyZA=='
        })
      })
  return await response.json(); 
};

const getEvent = async (id) => {
  let response = await fetch(url + id);
  return await response.json();
};

const saveEvent = async (moviesEvent) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(moviesEvent),
    headers: new Headers({
      "Content-Type": "application/json",
      'Authorization': 'Basic dXNlcjE6eldBM0QzdlVNUnNicHJyZA=='
    }),
  });
  return response;
};
/*
const editEvent = async (id, moviesEvent) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(moviesEvent),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  return response;
};

const deleteEvent = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
  });
  return response;
};
*/