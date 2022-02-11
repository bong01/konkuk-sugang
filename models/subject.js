module.exports = class Subject {
    constructor(build) {
        if (build) {
            this.id = build.id;
            this.name = build.name;
            this.professor = build.professor;
            this.room = build.room;
            this.type = build.type;
            this.inwon = build.inwon;
            this.grade = build.grade;
            this.detail = build.detail;
        }
    }

    static get Builder() {
        class Builder {

            setId(id) {
                this.id = id;
                return this;
            }

            setName(name) {
                this.name = name;
                return this;
            }

            setProfessor(professor) {
                this.professor = professor;
                return this;
            }

            setRoom(room) {
                this.room = room;
                return this;
            }

            setType(type) {
                this.type = type;
                return this;
            }

            setInwon(inwon) {
                this.inwon = inwon;
                return this;
            }

            setGrade(grade) {
                this.grade = grade;
                return this;
            }

            setDetail(detail) {
                this.detail = detail;
                return this;
            }

            build() {
                return new Subject(this);
            }
        }

        return new Builder();
    }

}