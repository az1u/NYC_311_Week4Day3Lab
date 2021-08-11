console.log('verify')



$('form').on('submit', (event) =>{
  event.preventDefault()
  const clearContainer = () => {$("#complaints-container").empty()}
           
          $("button").on("click", event => {
              clearContainer();
          })

var buttonPress = event.originalEvent.submitter.value
var caseNumbers = $('#numbersInput').val()
console.log(buttonPress)

if(caseNumbers == "" || caseNumbers > 10){
  caseNumbers = 10
}

const threeOneOne = $.ajax({url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough="+ buttonPress + "&$limit="+ caseNumbers})
 

  threeOneOne.then(
          (data) => {
            data.map( complaint =>{
                console.log(complaint)
                let agency = $('<div>').html(complaint.agency)
                $('#complaints-container').append(agency)

                let borough = $('<div>').html(complaint.borough)
                $('#complaints-container').append(borough)

                let complaintTag = $('<div>').html(complaint.Complaint_type)
                $('#complaints-container').append(complaintTag)                

                let description = $('<div>').html(complaint.descriptor)
                $('#complaints-container').append(description)               

                let status = $('<div>').html(complaint.status)
                $('#complaints-container').append(status)

                let policeResponseButton = $('<button>').html("Police Response").addClass('pResponse')
                $('#complaints-container').append(policeResponseButton)

                let police_response = $('<div>').html(complaint.resolution_description).addClass('resolution')
                
                $('#complaints-container').append(police_response)
                police_response.hide()
                
              

                
              
                policeResponseButton.on('click', ()=>{
                    police_response.toggle()
                })
            })
     
         
          },
          ()=>{
            alert("This did not work")
  
          }
  
   )
  
})


