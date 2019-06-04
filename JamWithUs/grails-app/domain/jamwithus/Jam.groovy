package jamwithus

class Jam {
    String name
    Date date
    
    Location location
    
    String description

    int numberParticipants
    int maxParticipants
    //boolean full  

    static hasMany = [participants: User, askers: User, watchers: User, instruments: Instrument, genres: Genre]

    static constraints = {
    }
}