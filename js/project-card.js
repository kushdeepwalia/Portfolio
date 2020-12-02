function extractor(url_id) {
    if (url_id.search("google.com") != -1) {
      var id = url_id.split("=");
      url_link = "https://drive.google.com/thumbnail?id=";
      var url = url_link.concat(id[1]);
    } else {
      url = url_id;
    }
    return url;
}

fetch(
    "https://spreadsheets.google.com/feeds/list/1stjr8UVQ3RufMI8v-y8NdZ9AY_-DKpij7BV_wB0zNV8/1/public/full?alt=json"
)
.then((res) => res.json())
.then((data) => {
    var totalProjects = data["feed"]["entry"].length;
    var projects = data["feed"]["entry"];
    var project = document.getElementById('row');

    for (let i = 0; i < totalProjects; i++) 
    {
        if(projects[i]["gsx$approved"]["$t"] === "1")
        {
            var projectContainer = document.createElement('div');
            projectContainer.classList.add('plan-container');
            project.appendChild(projectContainer);

            var projectImage = document.createElement('div');
            projectImage.classList.add('plan-image');
            projectContainer.appendChild(projectImage);

            var proImage = document.createElement('img');
            proImage.setAttribute("src", extractor(projects[i]['gsx$image']['$t']));
            projectImage.appendChild(proImage);
            
            var projectName = document.createElement('div');
            projectName.classList.add('plan-amount');
            projectContainer.appendChild(projectName);
            
            var proName = document.createElement('span');
            proName.classList.add('amount');
            proName.innerText = projects[i]["gsx$name"]["$t"];
            projectName.appendChild(proName);

            var projectDesc = document.createElement('div');
            projectDesc.classList.add('plan-desc');
            projectContainer.appendChild(projectDesc);

            var para = document.createElement('p');
            para.innerText = projects[i]["gsx$desc"]["$t"];
            projectDesc.appendChild(para);

            var button = document.createElement('button');
            button.classList.add('btn','newBtn');
            projectDesc.appendChild(button);

            var anchor = document.createElement('a');
            anchor.setAttribute('href',projects[i]["gsx$url"]["$t"]);
            anchor.setAttribute('target',"_blank");
            anchor.innerText = "Project Link";
            button.appendChild(anchor);
        }
    }
});