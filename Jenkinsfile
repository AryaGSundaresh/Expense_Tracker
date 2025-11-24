pipeline {
    agent any

    environment {
        IMAGE_NAME = "aryagsundaresh/expense-tracker"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/AryaGSundaresh/Expense_Tracker.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${IMAGE_NAME}:latest
                    '''
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo "No tests — basic verification"
                sh 'docker images'
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh 'docker stop expense || true'
                    sh 'docker rm expense || true'
                    sh 'docker run -d -p 8080:80 --name expense ${IMAGE_NAME}:latest'
                }
            }
        }

    }
}
