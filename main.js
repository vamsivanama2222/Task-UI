var data=[{
  "id": 1,
  "collab_name": "VAMSI",
  "collab_FIRST_SECOND": "VK",
  "collab_firstname":"vamsi",
  "collab_lastname":"krishna",
  "collab_email":"vamsi@gmail.com",
  "collab_contact":"7893421567",
  "info":"The man fjsk shisfs",
  "NoOfVeh": 3,
  "NoOfCards": 3,
  "NoOfBadges": 3
},
{
  "id": 2,
  "collab_name": "Viraj",
  "collab_FIRST_SECOND": "VJ",
  "collab_firstname":"viraj",
  "collab_lastname":"Mukesh",
  "collab_email":"vairaj@gmail.com",
  "collab_contact":"7893421337",
  "info":"The man fjsk shisfs",
  "NoOfVeh": 1,
  "NoOfCards": 2,
  "NoOfBadges": 2
},
{
  "id": 3,
  "collab_name": "Saroof",
  "collab_FIRST_SECOND": "VK",
  "collab_firstname":"vamsi",
  "collab_lastname":"krishna",
  "collab_email":"vamsi@gmail.com",
  "collab_contact":"7893421567",
  "info":"The man fjsk shisfs",
  "NoOfVeh": 3,
  "NoOfCards": 3,
  "NoOfBadges": 3
},
{
  "id": 4,
  "collab_name": "Singh",
  "collab_FIRST_SECOND": "VK",
  "collab_firstname":"vamsi",
  "collab_lastname":"krishna",
  "collab_email":"vamsi@gmail.com",
  "collab_contact":"7893421567",
  "info":"The man fjsk shisfs",
  "NoOfVeh": 3,
  "NoOfCards": 3,
  "NoOfBadges": 3
},
{
  "id": 5,
  "collab_name": "MAHESH",
  "collab_FIRST_SECOND": "VK",
  "collab_firstname":"vamsi",
  "collab_lastname":"krishna",
  "collab_email":"vamsi@gmail.com",
  "collab_contact":"7893421567",
  "info":"The man fjsk shisfs",
  "NoOfVeh": 3,
  "NoOfCards": 3,
  "NoOfBadges": 3
}
];
function returnId(name) {
    var results = new RegExp("[?&]" + name + "=([^&#?]*)").exec(window.location.href);
    if (results) return results[1];
    else return 0;
};
function fromData(collabId)
{
	for(var i=0;i<data.length;i++)
	{
		if(data[i].id==Number.parseInt(collabId))
		{
			return data[i];
		}
	}
}
function fillData(collabData)
{
	$("#collab-fs").text(collabData.collab_FIRST_SECOND);
	$("#collab-name").text(collabData.collab_name);
	$("#noOfVeh").text(collabData.NoOfVeh+" Vehicles");
	$("#noOfCards").text(collabData.NoOfCards+" Cards");
	$("#noOfBadges").text(collabData.NoOfBadges+" Badges");
	$("#collab-first-name").text(collabData.collab_firstname);
	$("#collab-last-name").text(collabData.collab_lastname);
	$("#collab-email").text(collabData.collab_email);
	$("#collab-info").text(collabData.info);
	
}
function getAllData()
{
	var id=returnId("collabAccountCode");
	var collabData=fromData(id);
	fillData(collabData);
}
function preIntialization()
{
	$(".character-counter").addClass("hide");
}
$(document).ready(function(){
	preIntialization();
	getAllData();
}
);