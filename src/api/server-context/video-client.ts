import axios, { AxiosResponse } from 'axios';

interface RTCIceCandidate {
  toJSON(): any;
}

interface RTCSessionDescription {
  sdp: any;
  type: any;
}

interface VideoServiceResponse {
  offerCandidatesEndpoint: string;
  answerCandidatesEndpoint: string;
}

const BASE_URL = 'http://localhost:3001/api/';
const backendURL = `${BASE_URL}calls/um_id_unico_da_chamada`; // Replace 'um_id_unico_da_chamada' with your actual unique call ID

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);

const VideoService = {
  createCall: async (idCall: string): Promise<any> => {
    try {
      const response: AxiosResponse<VideoServiceResponse> = await api.post(
        `${backendURL}/createCall`,
        {
          callId: idCall,
        }
      );
      return response;
    } catch (error: any) {
      console.error('Error creating call:', error.message);
    }
  },

  sendOfferCandidate: async (candidate: RTCIceCandidate): Promise<void> => {
    try {
      await api.post(`${backendURL}/offerCandidates`, { candidate });
    } catch (error: any) {
      console.error('Error sending offer candidate:', error.message);
    }
  },

  getAnswerCandidates: async (): Promise<void> => {
    try {
      const response: AxiosResponse<any> = await api.get(
        `${backendURL}/answerCandidates`
      );
      const answerCandidates: any = response.data;
      console.log('Answer Candidates:', answerCandidates);
    } catch (error: any) {
      console.error('Error getting answer candidates:', error.message);
    }
  },

  sendAnswerCandidate: async (candidate: RTCIceCandidate): Promise<void> => {
    try {
      await api.post(`${backendURL}/answerCandidates`, { candidate });
    } catch (error: any) {
      console.error('Error sending answer candidate:', error.message);
    }
  },
};

export { VideoService, pc };
