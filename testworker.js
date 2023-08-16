fetch("https://nbtfeed.speakingtree.in/langapi/masterauthor", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                })
                .then(response => response.json()) // This returns a promise
                .then(responseData => {
                    const authors = responseData && responseData.authors;
                    let authorList = ``;
                    authors.map(item => {
                        authorList += `<div><h1>${item.name}</h1></div>`;
                    })
                    document.body.innerHTML = authorList;
                })
                .catch(error => {
                    console.error("Error:", error);
                });
