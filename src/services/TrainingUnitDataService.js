import http from "../http-common";

class TrainingUnitDataService {
    getAll() {
        return http.get("/trainingUnits");
    }

    get(id) {
        return http.get(`/trainingUnits/${id}`);
    }

    create(data) {
        return http.post("/trainingUnits", data);
    }

    update(id, data) {
        return http.put(`/trainingUnits/${id}`, data);
    }

    delete(id) {
        return http.delete(`/trainingUnits/${id}`);
    }

    deleteAll() {
        return http.delete(`/trainingUnits`);
    }

    findByMuscle(muscle) {
        return http.get(`/trainingUnits?trainedMuscles=${muscle}`);
    }

    findByDate(date) {
        return http.get(`/trainingUnits?date=${date}`);
    }
}

export default new TrainingUnitDataService();