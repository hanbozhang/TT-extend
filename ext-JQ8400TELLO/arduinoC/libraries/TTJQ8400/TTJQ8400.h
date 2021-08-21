#ifndef _TTJQ8400_H
#define _TTJQ8400_H

#if ARDUINO < 100
#include <WProgram.h>
#else
#include <Arduino.h>
#endif

class TTJQ8400
{
public:
    char _16[16]={0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0x0c,0x0d,0x0e,0x0f};
    TTJQ8400()
    {
    }

    ~TTJQ8400()
    {
    }
    //播放
    void play()
    {
        sendData(0x0a);
        sendData(0x11);
    }
    //停止
    void stop()
    {
        sendData(0x0a);
        sendData(0x13);
    }
    //暂停
    void suspend()
    {
        sendData(0x0a);
        sendData(0x12);
    }
    //上一曲
    void last_song()
    {
        sendData(0x0a);
        sendData(0x14);
    }
    //下一曲
    void next_song()
    {
        sendData(0x0a);
        sendData(0x15);
    }
    //选曲播放
    void setSong(uint32_t song)
    {
        uint32_t t=song/10;
        uint32_t b=song%10;
        sendData(0x0a);
        if(t>0){
            sendData(_16[t]);
        }            
        sendData(_16[b]);
        sendData(0x0b);
    }
    //设置音量
    void setVolume(uint32_t vol)
    {
        uint32_t t=vol/10;
        uint32_t b=vol%10;
        sendData(0x0a);
        sendData(_16[t]);
        sendData(_16[b]);
        sendData(0x0C);
    }
    //设置播放模式
    void setModel(uint32_t mod)
    {
        sendData(0x0a);
        sendData(_16[mod]);
        sendData(0x0E);
    }
    //设置EQ
    void setEQ(uint32_t eq)
    {
        sendData(0x0a);
        sendData(_16[eq]);
        sendData(0x0D);
    }




protected:
private:
    void sendData(char addr)
    {
        pinMode(26, OUTPUT);
        digitalWrite(26, 1);
        delayMicroseconds(1000);
        digitalWrite(26, 0);
        delayMicroseconds(4000);
        for (int i = 0; i < 8; i++)
        {
            digitalWrite(26, 1);
            if (addr & 0x01)
            {
                delayMicroseconds(600);
                digitalWrite(26, 0);
                delayMicroseconds(200);
            }
            else
            {
                delayMicroseconds(200);
                digitalWrite(26, 0);
                delayMicroseconds(600);
            }
            addr >>= 1;
        }
        digitalWrite(26, 1);
    }
};

#endif // _TTJQ8400
