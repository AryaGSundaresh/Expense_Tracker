pipeline {
    agent any

    environment {
        IMAGE_NAME = "aryagsundaresh1/expense-tracker"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME%:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat '''
                        echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                        docker push %IMAGE_NAME%:latest
                    '''
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo "No tests — basic verification"
                bat 'docker images'
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    bat 'docker stop expense || exit 0'
                    bat 'docker rm expense || exit 0'
                    bat 'docker run -d -p 8081:80 --name expense %IMAGE_NAME%:latest'
                }
            }
        }

    }
}
