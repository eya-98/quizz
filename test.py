from codecs import ascii_decode


s = [
    {
      "question": "In which year was Hannibal born?",
      "answers": [
        "247 BC",
        "182 BC",
        "347 BC",
        "218 BC"
      ],
      "correctIndex": 1
    },
    {
      "question": "Who made Hannibal swear an oath to hate Rome?",
      "answers": [
        "His father, Hamilcar",
        "His enemy, Publius",
        'The Carthaginian Senate',
        'One of his soldiers'
      ],
      "correctIndex": 1
    },
    {
      "question": 'How many men did Hannibal lose while crossing the Alps?',
      "answers": [
        'He was Left with 10,000 men',
        'He was Left with 50,000 men',
        'He was left with 13,000 men',
        'he was Left with 15,000 men'
      ],
      "correctIndex": 3
          },
    {
      "question": 'Where Did Hannibal Barca Commit Suicide?',
      "answers": [
        'Antioch',
        'Libyssa',
        'Rome',
        'Tyre'
      ],
      "correctIndex": 2
    },
    {
      "question": 'Hannibal Barca Killed Over 50,000 Roman Soldiers In Which Battle?',
      "answers": [
        'Trebia',
        'Cannae',
        'Ticinus',
        'Trasimene'
      ],
      "correctIndex": 2
    },
    {
      "question": 'Hannibal Barca Was Finally Defeated By Rome In Which Battle?',
      "answers": [
        'Zama',
        'Tarentum',
        'Herdonia',
        'Crotona'
      ],
      "correctIndex": 1
    },
    {
      "question": 'Who Defeated Hannibal Barca In The Battle with Rome?',
      "answers": [
        'gaius terentius varro',
        'Cornelius Scipio Africanus',
        'Lucius Aemilius Paullus',
        'Tiberius Sempronius Longus'
      ],
      "correctIndex": 2
    },
    {
      "question": 'What Was The Name Of The War Between Rome And Hannibal Barca?',
      "answers": [
        'First Macedonian War',
        'The First Punic War',
        'The second Punic War',
        'The third Punic War'
      ],
      "correctIndex": 3
    },
    {
      "question": "Which Animal Turned Around And Harmed Hannibal's Troops In The Battle Of Zama?",
      "answers": [
        'Camel',
        'Elephant',
        'Wolf',
        'Horse'
      ],
      "correctIndex": 2
    },
    {
      "question": 'Who was Hannibal a general for during the second punic war?',
      "answers": [
        'Rome',
        'The Punics',
        'Pontus',
        ' Carthage'
      ],
      "correctIndex": 4
    },
    {
      "question": 'Where did Hannibal have the most success in finding allies and soldiers for his army?',
      "answers": [
        'Rome',
        'Macedon',
        'Lower Italy',
        'other'
      ],
      "correctIndex": 3
    },
    {
      "question": "Who was Hannibal's most important ally?",
      "answers": [
        'Phillip II of Macedon',
        'Phillip V of Macedon',
        'Perseus of Macedon',
        'Hanno of Carthage'
      ],
      "correctIndex": 2
    }
   ]
x = str(s).replace(chr(39),chr(34))
x = x.replace(', ', ',\n')
print(x)