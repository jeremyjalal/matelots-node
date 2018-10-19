pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            echo "I'm here !"   
        }
    }
    post {
        always {
            echo 'Cleaning workspace...'
            deleteDir() /* clean up our workspace */
        }
    }
}