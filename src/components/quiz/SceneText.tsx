import { motion } from 'framer-motion'

interface SceneTextProps {
  scenarioTitle: string
  sceneText: string
}

export function SceneText({ scenarioTitle, sceneText }: SceneTextProps) {
  return (
    <div className="mb-4">
      <motion.p
        className="text-sm italic text-text-caption leading-relaxed mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {sceneText}
      </motion.p>
      <motion.h2
        className="text-xl md:text-2xl font-body font-bold text-text-heading leading-snug"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
      >
        {scenarioTitle}
      </motion.h2>
    </div>
  )
}
