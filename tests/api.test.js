const apiCall = require('../api')
var supertest = require('supertest')
const request = supertest("https://reqres.in/")


describe("Testing",()=>{
    test("api test", async ()=>{
        const fetchedData = await apiCall()
        expect(fetchedData.id).toBe(1)
    })
    
    it.each([1])("Get all users", async (page)=>{
        const info = await request.get(`api/users?page=${page}`)
        expect(info.status).toBe(200)
    })
    
    it.each([["rk", "leader"],['leader', 'co-leader']])("Post request", async (name, job)=>{
        const user = {
            "name": `${name}`,
            "job": `${job}`,
        }
        const info = await request.post("api/users").send(user)
        expect(info.status).toBe(201)
    })
})
