document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var eventsSch = [
                        {
                          title: "All Day Event",
                          start: "2020-06-01"
                        },
                        {
                          title: "Long Event",
                          start: "2020-06-07",
                          end: "2020-06-10"
                        },
                        {
                            title: "Marathon",
                            start: "2020-06-10",
                            end: "2020-06-10T16:00:00"                          
                        },  
                          {
                            title: "Wedding Ceremony",
                            start: "2020-06-14",
                            end: "2020-06-14T16:00:00"
                          },
                        {
                          groupId: 999,
                          title: "Repeating Event",
                          start: "2020-06-09T16:00:00"
                        },
                        {
                          groupId: 999,
                          title: "Repeating Event",
                          start: "2020-06-16T16:00:00"
                        },
                        {
                          title: "Conference",
                          start: "2020-06-11",
                          end: "2020-06-13"
                        },
                        {
                          title: "Meeting",
                          start: "2020-06-12T10:30:00",
                          end: "2020-06-12T12:30:00"
                        },
                        {
                          title: "Lunch",
                          start: "2020-06-12T12:00:00"
                        },
                        {
                          title: "Meeting",
                          start: "2020-06-12T14:30:00"
                        },
                        {
                          title: "Happy Hour",
                          start: "2020-06-12T17:30:00"
                        },
                        {
                          title: "Dinner",
                          start: "2020-06-12T20:00:00"
                        },
                        {
                          title: "Birthday Party",
                          start: "2020-06-13T07:00:00"
                        },
                        {
                          title: "Click for Google",
                          url: "http://google.com/",
                          start: "2020-06-28"
                        }
                    ]     
        

        console.log(typeof(eventsSch))
        var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'listDay,listWeek,timeGridDay'
      },

      // customize the button names,
      // otherwise they'd all just say "list"
      views: {
        listDay: { buttonText: 'list day' },
        listWeek: { buttonText: 'list week' },
        Day: { buttonText: 'Day Wise Events' },
        basicDay:{buttonText:''}
      },

      initialView: 'listWeek',
      initialDate: '2020-06-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: eventsSch 
    },
    
    )

    calendar.render();
  });