'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, ShieldQuestion } from 'lucide-react';

const INITIAL_QUESTIONS = [
  // Games: Minecraft & Roblox
  // { text: "In Minecraft, creepers explode when they get close to you.", answer: true },
  { text: "In Roblox, 'Blox Fruits' is a game about collecting pets in a modern city.", answer: false },
  { text: "In Minecraft, you need a pickaxe to mine stone blocks.", answer: true },
  // { text: "In Roblox, players use 'Robux' to buy items and clothes for their avatars.", answer: true },
  { text: "In Minecraft, you can find villages with NPCs to trade items.", answer: true },
  { text: "In Roblox, you can only play games, you cannot create your own games.", answer: false },
  { text: "In Minecraft, diamonds are the easiest material to find in the game.", answer: false },
  // Roblox (Hard)
  { text: "The default Roblox avatar was originally known as 'Blocky'.", answer: true },
  { text: "The game 'Adopt Me!' was originally created as a pet-collecting game.", answer: false },
  { text: "The Roblox event 'The Hunt: Mega Edition' was held in 2025.", answer: true },
  { text: "Players can publish a Roblox game without spending any Robux.", answer: true },
  { text: "In 'Blox Fruits', players choose between Pirates and Marines when starting the game.", answer: true },
  { text: "The currency 'Tix' still exists alongside Robux in Roblox.", answer: false },
  { text: "In 'Tower of Hell', there are no checkpoints during a normal round.", answer: true },
  { text: "Robux can only be earned by purchasing them with real money.", answer: false },
  { text: "The classic Roblox 'oof' death sound is still used in all new Roblox games.", answer: false },
  { text: "Roblox Studio uses the Lua programming language to create game scripts.", answer: true },

  // Games: Other Popular Titles
  { text: "In Brawl Stars, you can play alone or in teams of three players.", answer: true },
  { text: "Valorant is a competitive shooting game.", answer: true },
  { text: "Free Fire is a battle royale game where you jump from an airplane.", answer: true },
  { text: "In Brawl Stars, Shelly is the very first character you unlock.", answer: true },
  { text: "League of Legends is a racing game with fast cars.", answer: false },

  // Anime & Pop Culture
  { text: "In 'Spy x Family', the character Anya has the power to read minds.", answer: true },
  { text: "In 'My Hero Academia', Izuku Midoriya is born with a very strong superpower.", answer: false },
  { text: "Goku is the main character of the anime Dragon Ball.", answer: true },
  { text: "In 'Naruto', the main character wants to become the Hokage of his village.", answer: true },
  { text: "'One Piece' is an anime about a group of space aliens.", answer: false },
  { text: "Iron Man is a superhero who uses a high-tech suit of armor to fly.", answer: true },

  // IT Basics: Hardware & Internet
  { text: "The 'Mouse' is a computer part used to click and move the cursor on the screen.", answer: true },
  { text: "A 'Monitor' has separate power outlet for the CPU.", answer: false },
  { text: "The 'Keyboard' can contain or no numbers, but always letters, and special symbols to type.", answer: true },
  { text: "Wi-Fi is a technology to connect to the internet without using cables.", answer: true },
  { text: "To turn on a computer, you can press the 'Alt' + 'Delete' button.", answer: false },
  { text: "Its always safe download a file from the internet to your computer.", answer: false },
  { text: "A good password should be easy to guess, like '123456'.", answer: false },
  { text: "Google is a famous search engine used to find information on the internet.", answer: true },
  { text: "The CPU is known as the 'brain' of the computer.", answer: true },

  // Software Basics: Word, PowerPoint & Excel
  { text: "Microsoft Word is a program used to type and format text documents.", answer: true },
  { text: "In Microsoft PowerPoint, you can create slide presentations with images.", answer: true },
  { text: "Microsoft Excel is a program designed to edit photos and videos.", answer: false },
  { text: "In Word, the 'Bold' option makes the text thicker and darker.", answer: true },
  { text: "In PowerPoint, you can add animations to make text and images move.", answer: true },
  { text: "Excel uses rows and columns to organize numbers and information.", answer: true },
  { text: "In Word, the keyboard shortcut 'Ctrl + C' is used to paste the text.", answer: false },
  { text: "You can insert tables and colorful charts inside an Excel document.", answer: true },
  { text: "In PowerPoint, the 'F5' key is a shortcut to start the presentation.", answer: true },
  { text: "Microsoft Word cannot save files in PDF format.", answer: false },

  // General Tech Fun Facts (Pegadinhas e Utilidades)
  { text: "A 'Browser' is a program used to access the web, like Google Chrome.", answer: true },
  { text: "An 'Emoji' is a small digital image used to express emotions in text messages.", answer: true },
  { text: "To undo a mistake in a document, you can press 'Ctrl + Z' on your keyboard.", answer: true },
  { text: "Hardware is the part of the computer that you cannot touch, like the programs.", answer: false },
  { text: "A computer 'Virus' is a program that makes your computer run faster.", answer: false }
];

export default function GamePage() {
  const [gameState, setGameState] = useState<'start' | 'playing'>('start');
  const [activePool, setActivePool] = useState([...INITIAL_QUESTIONS]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<typeof INITIAL_QUESTIONS[0] | null>(null);
  const [answerStatus, setAnswerStatus] = useState<null | 'correct' | 'incorrect'>(null);
  
  const [isMuted, setIsMuted] = useState(false);

  // Audio refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  
  // Track which number was pressed recently (just for UI styling if desired)
  const [lastClickedNumber, setLastClickedNumber] = useState<number | null>(null);

  useEffect(() => {
    // Initialize background music 
    bgmRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    if (bgmRef.current) {
      bgmRef.current.loop = true;
      bgmRef.current.volume = 0.2;
    }
  }, []);

  useEffect(() => {
    if (bgmRef.current) {
      bgmRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const playSound = (freq: number, type: OscillatorType, dur: number) => {
    if (isMuted || !audioCtxRef.current) return;
    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtxRef.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtxRef.current.currentTime + dur);
    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);
    osc.start();
    osc.stop(audioCtxRef.current.currentTime + dur);
  };

  const startGame = () => {
    setGameState('playing');
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }
    if (bgmRef.current) {
      bgmRef.current.play().catch(e => console.error("Audio play blocked", e));
    }
  };

  const getRandomQuestion = () => {
    let pool = [...activePool];
    if (pool.length === 0) {
      // Reset pool
      pool = [...INITIAL_QUESTIONS];
    }
    
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selected = pool[randomIndex];
    
    // Remove from pool
    pool.splice(randomIndex, 1);
    setActivePool(pool);
    
    return selected;
  };

  const handleNumberClick = (number: number) => {
    if (isModalOpen) return;
    
    setLastClickedNumber(number);
    const q = getRandomQuestion();
    setCurrentQuestion(q);
    setAnswerStatus(null);
    setIsModalOpen(true);
    playSound(440, 'sine', 0.1);
  };

  const handleAnswer = (guess: boolean) => {
    if (!currentQuestion || answerStatus) return;

    if (guess === currentQuestion.answer) {
      setAnswerStatus('correct');
      playSound(880, 'square', 0.2);
      setTimeout(() => playSound(1100, 'square', 0.3), 100);
      triggerConfetti();
    } else {
      setAnswerStatus('incorrect');
      playSound(150, 'sawtooth', 0.4);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const closeQuestion = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setCurrentQuestion(null);
      setAnswerStatus(null);
      setLastClickedNumber(null);
    }, 300); // Wait for modal exit animation
  };

  const triggerConfetti = () => {
    const duration = 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="h-screen w-full bg-[#FFD166] text-[#073B4C] flex flex-col overflow-hidden font-sans relative">
      
      {gameState === 'start' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-[#118AB2] z-[200] flex flex-col items-center justify-center text-white"
        >
          <h1 className="text-[64px] font-[900] mb-[20px] text-center leading-none uppercase tracking-tight">
            D20 CLASSROOM<br/>CAN YOU GUESS?
          </h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="text-[48px] py-[20px] px-[60px] bg-[#FFD166] text-[#073B4C] border-[6px] border-[#073B4C] rounded-[24px] font-[900] shadow-[10px_10px_0_#fff] cursor-pointer uppercase flex items-center justify-center"
          >
            START GAME
          </motion.button>
        </motion.div>
      )}

      {gameState === 'playing' && (
        <div className="flex-1 flex flex-col w-full h-full relative">
          <header className="h-[80px] flex items-center justify-between px-[40px] bg-white border-b-[4px] border-[#073B4C] shrink-0">
            <div className="text-[32px] font-[900] uppercase tracking-[-1px] text-[#073B4C]">Teacher Trivia</div>
            <div className="flex gap-[12px] items-center">
              <button 
                onClick={toggleMute}
                className="px-[16px] py-[8px] border-[3px] border-[#073B4C] rounded-[12px] font-bold cursor-pointer bg-[#FFD166] text-[#073B4C]"
              >
                MUTE: {isMuted ? 'ON' : 'OFF'}
              </button>
            </div>
          </header>

          <main className="flex-1 grid grid-cols-4 sm:grid-cols-5 grid-rows-4 gap-[16px] p-[24px]">
            {numbers.map((num) => (
              <motion.button
                key={num}
                onClick={() => handleNumberClick(num)}
                className={`
                  bg-white border-[4px] border-[#073B4C] rounded-[16px] flex items-center justify-center
                  text-[36px] font-[900] text-[#073B4C] transition-all cursor-pointer shadow-[6px_6px_0_#073B4C]
                  hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_#073B4C]
                  active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
                  ${lastClickedNumber === num ? '!bg-[#E0E0E0] !opacity-60 !shadow-none !translate-x-0 !translate-y-0 cursor-default hover:translate-x-0 hover:translate-y-0 active:translate-x-0 active:translate-y-0' : ''}
                `}
              >
                {num}
              </motion.button>
            ))}
          </main>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && currentQuestion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[100] flex items-center justify-center p-[20px] transition-colors duration-200
               ${answerStatus === 'correct' ? 'bg-[#06D6A0]/40' : answerStatus === 'incorrect' ? 'bg-[#EF476F]/40' : 'bg-[#073B4C]/90'}
            `}
          >
            <motion.div
              initial={{ y: 50 }}
              animate={
                answerStatus === 'incorrect' 
                  ? { y: 0, x: [-10, 10, -10, 10, 0] } // Shake
                  : { y: 0 }
              }
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="w-[600px] max-w-full bg-white border-[6px] border-[#073B4C] rounded-[32px] p-[40px] text-center shadow-[12px_12px_0_#06D6A0] flex flex-col gap-[24px]"
            >
               <div className="text-[14px] uppercase opacity-50 font-bold text-[#073B4C]">
                 Dice Roll: {lastClickedNumber}
               </div>

               {answerStatus === null && (
                 <>
                    <h3 className="text-[28px] font-bold text-[#073B4C] leading-[1.4]">
                      {currentQuestion.text}
                    </h3>
                    
                    <div className="flex gap-[20px] justify-center">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAnswer(true)}
                        className="flex-1 py-[20px] bg-[#06D6A0] text-white font-[900] text-[24px] uppercase border-[4px] border-[#073B4C] rounded-[16px] cursor-pointer"
                      >
                        True
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAnswer(false)}
                        className="flex-1 py-[20px] bg-[#EF476F] text-white font-[900] text-[24px] uppercase border-[4px] border-[#073B4C] rounded-[16px] cursor-pointer"
                      >
                        False
                      </motion.button>
                    </div>
                 </>
               )}

               {answerStatus && (
                 <>
                    {answerStatus === 'correct' ? (
                      <h3 className="text-[28px] font-[900] text-[#06D6A0] leading-[1.4]">
                        {currentQuestion.text}
                      </h3>
                    ) : (
                      <h3 className="text-[28px] font-bold text-[#073B4C] leading-[1.4] opacity-50 line-through">
                        {currentQuestion.text}
                      </h3>
                    )}
                    <div className="text-center py-2 flex flex-col items-center">
                      {answerStatus === 'correct' ? (
                        <h3 className="text-[48px] font-[900] text-[#06D6A0] uppercase mb-[24px]">CORRECT!</h3>
                      ) : (
                        <h3 className="text-[48px] font-[900] text-[#EF476F] uppercase mb-[24px]">INCORRECT</h3>
                      )}
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={closeQuestion}
                        className="px-[30px] py-[12px] bg-[#073B4C] text-white rounded-[12px] font-bold text-[20px] uppercase cursor-pointer"
                      >
                        CONTINUE
                      </motion.button>
                    </div>
                 </>
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
