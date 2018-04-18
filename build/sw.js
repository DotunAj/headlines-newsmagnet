self.addEventListener('install', function(event){
    event.waitUntil(
        
    );
})


self.addEventListener('fetch', function(event) {
    
    fetch(event.request).then(function(response){
        if (event.response.status == 403) {

            return fetch('/assets/logo.png')
        }
        return reponse;
    }).catch(function(){
        return fetch('/assets/logo.png') 
    })
        

})