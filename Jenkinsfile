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
                bat 'docker build -t expense-tracker:latest .'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Basic verification"
                bat 'docker images'
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker stop expense || exit 0'
                bat 'docker rm expense || exit 0'
                bat 'docker run -d -p 8081:80 --name expense expense-tracker:latest'
            }
        }
    }
}
