1. Instruction Link
    https://www.petri.com/how-to-edit-linux-files-remotely-in-windows-using-visual-studio-code
2. Install Remote VSCode Extention:
    - go to extension of vscode
    - search for "Remote VSCode"
    - install the extension
3. Install Rmate in the Linux VM server
    - download the rmate:
    >sudo wget -O /usr/local/bin/rmate https://raw.github.com/aurora/rmate/master/rmate
        //outpute:
        --2019-11-04 04:33:37--  https://raw.github.com/aurora/rmate/master/rmate
        Resolving raw.github.com (raw.github.com)... 151.101.28.133
        Connecting to raw.github.com (raw.github.com)|151.101.28.133|:443... connected.
        HTTP request sent, awaiting response... 301 Moved Permanently
        Location: https://raw.githubusercontent.com/aurora/rmate/master/rmate [following]
        --2019-11-04 04:33:38--  https://raw.githubusercontent.com/aurora/rmate/master/rmate
        Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.28.133
        Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.28.133|:443... connected.
        HTTP request sent, awaiting response... 200 OK
        Length: 10422 (10K) [text/plain]
        Saving to: '/usr/local/bin/rmate’

        /usr/local/bin/ 100%[======>]  10.18K  --.-KB/s    in 0s      

        2019-11-04 04:33:38 (75.0 MB/s) - '/usr/local/bin/rmate’ saved [10422/10422]
    - change permission:
    >sudo chmod a+x /usr/local/bin/rmate
4. Install sshclient and server
    >sudo apt install openssh-client
    >sudo apt install openssh-server

5. Edit sshd_config file
    >sudo nano /etc/ssh/sshd_config
    //then, change "PasswordAuthentication yes" from "PasswordAuthentication no"
    //save the file and then restart the ssh
    >sudo systemctl restart ssh
6. Test ssh connection:
    >ssh localhost -l <username>
7. install ssh on host machine (mac, windows, ubuntu and so on)
8. start rmate server in vs code
    - open vscode
    - enter commond pallete box (view > commond pallete, on Mac, or just press F1 on windows)
        >Remote: Start Server   //type on the box
    - open terminal on vscode, then connect to the remote server for this terminal
        >ssh -R 52698:localhost:52698 136.186.108.84 -l ubuntu

9. Edit file:
    >rmate -f /path/to/the/file

Invoice@2019
