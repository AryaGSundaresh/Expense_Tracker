pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/AryaGSundaresh/Expense_Tracker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t expense-tracker:latest .'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo "No automated tests available — Running basic Docker verification"
                sh 'docker images'
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh 'docker stop expense || true'
                    sh 'docker rm expense || true'
                    sh 'docker run -d -p 8080:80 --name expense expense-tracker:latest'
                }
            }
        }
    }
}
